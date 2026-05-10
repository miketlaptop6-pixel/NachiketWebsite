document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const dealForm = document.getElementById('deal-form');
    const generateBtn = document.getElementById('generate-btn');
    const downloadSection = document.getElementById('download-section');
    const downloadBtn = document.getElementById('download-btn');
    const downloadClientName = document.getElementById('download-client-name');
    const downloadOppId = document.getElementById('download-opp-id');
    const formError = document.getElementById('form-error');
    const loadingOverlay = document.getElementById('loading-overlay');
    const successToast = document.getElementById('success-toast');
    const insightsSection = document.getElementById('insights-section');
    const insightsClientName = document.getElementById('insights-client-name');
    const formInputs = dealForm.querySelectorAll('input[required], select[required]');

    // Form Validation
    const validateForm = () => {
        let isValid = true;
        formInputs.forEach(input => {
            if (input.type === 'radio') {
                const radioGroup = dealForm.querySelectorAll(`input[name="${input.name}"]`);
                const isRadioChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isRadioChecked) isValid = false;
            } else if (!input.value.trim()) {
                isValid = false;
            }
        });
        return isValid;
    };

    // Generate Template Handler
    dealForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formError.classList.add('hidden');

        if (!validateForm()) {
            formError.classList.remove('hidden');
            return;
        }

        // Show loading overlay
        loadingOverlay.classList.remove('hidden');

        // Simulate template generation (2 seconds)
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            
            // Update download section
            const clientName = document.getElementById('client-name').value;
            const oppId = document.getElementById('opp-id').value;
            downloadClientName.textContent = clientName;
            downloadOppId.textContent = oppId;
            downloadSection.classList.remove('hidden');

            // Show success toast
            successToast.classList.remove('hidden');
            setTimeout(() => {
                successToast.classList.add('hidden');
            }, 3000);
        }, 2000);
    });

    // Download Button Handler
    downloadBtn.addEventListener('click', () => {
        // Create dummy deal template CSV
        const oppId = document.getElementById('opp-id').value;
        const clientName = document.getElementById('client-name').value;
        const region = document.getElementById('region').value;
        const clientType = document.getElementById('client-type').value;
        const dealType = document.querySelector('input[name="deal-type"]:checked').value;
        const tenure = document.getElementById('deal-tenure').value;

        const csvContent = `Opportunity ID,Client Name,Region,Client Type,Deal Type,Tenure\n${oppId},${clientName},${region},${clientType},${dealType},${tenure} Years`;
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `deal_template_${oppId}.csv`;
        link.click();
        URL.revokeObjectURL(url);

        // Show insights section
        insightsClientName.textContent = clientName;
        insightsSection.classList.remove('hidden');

        // Scroll to insights
        insightsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Input focus states
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
});