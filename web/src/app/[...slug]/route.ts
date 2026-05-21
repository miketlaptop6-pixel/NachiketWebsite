import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  
  // Remove trailing slash
  let filePath = pathname === '/' ? '/index.html' : pathname;
  
  // Handle file extensions - ensure .html extension for static pages
  if (!path.extname(filePath)) {
    filePath = filePath + '.html';
  }
  
  // Clean up the path (remove leading slash for file operations)
  const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
  
  // Map URLs to file names (convert /about/ to _about_.html format)
  let htmlFile = cleanPath;
  if (!htmlFile.endsWith('.html')) {
    htmlFile = '_' + htmlFile.replace(/\//g, '_') + '.html';
  } else if (!htmlFile.startsWith('_')) {
    // For files like /index.html, keep as is
    // For other files, prepend underscore to match scraped format
    const basename = path.basename(htmlFile, '.html');
    const dir = path.dirname(htmlFile);
    htmlFile = path.join(dir, '_' + basename + '.html');
  }
  
  const fileLocation = path.join(process.cwd(), 'public', htmlFile);
  
  try {
    if (fs.existsSync(fileLocation)) {
      const content = fs.readFileSync(fileLocation, 'utf8');
      return new NextResponse(content, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }
    
    // Try index.html in subdirectory
    const indexLocation = path.join(process.cwd(), 'public', cleanPath, 'index.html');
    if (fs.existsSync(indexLocation)) {
      const content = fs.readFileSync(indexLocation, 'utf8');
      return new NextResponse(content, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }
    
    return new NextResponse('Page not found', { status: 404 });
  } catch (error) {
    return new NextResponse('Error loading page', { status: 500 });
  }
}
