import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-8">
      <div className="text-center max-w-xl">
        <div className="mb-8">
          <span className="text-[10rem] md:text-[14rem] font-black tracking-tighter leading-none block text-primary opacity-20">
            404
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 -mt-16">
          Page Not Found
        </h1>
        <p className="text-sm text-muted mb-8 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or was never meant to be. 
          Much like a resume without substance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-text text-white text-xs font-bold uppercase tracking-widest cta-button"
          >
            Go Home
          </Link>
          <Link
            href="/templates"
            className="px-8 py-3 border-1 text-xs font-bold uppercase tracking-widest cta-button hover:bg-primary hover:text-white hover:border-primary"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </div>
  );
}
