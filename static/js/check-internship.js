// Function to search MCA website,and check you write company name or not
function searchMCA() {
    const companyName = document.getElementById('companyName').value;
    if (companyName) {
        const mcaUrl = 'https://www.mca.gov.in/content/mca/global/en/data.html';
        window.open(mcaUrl, '_blank');
    } else {
        alert('Please enter a company name first');
    }
}
//function for  put value variable which used for find score

function calculateScore() {
    const questions = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7',
        'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14'
    ];

    let score = 0;
    let answered = 0;
    let redFlags = 0;

    questions.forEach(q => {
        const selected = document.querySelector(
            `input[name="${q}"]:checked`
        );

        if (selected) {
            answered++;

            if (selected.value === 'yes') {

                // Q9 is a major red flag
                if (q === 'q9') {
                    redFlags++;
                } else {
                    score++;
                }
            }
        }
    });

    // If no question is answered
    if (answered === 0) {
        document.getElementById('scoreValue').textContent = '0';
        document.getElementById('progressFill').style.width = '0%';

        const messageEl = document.getElementById('scoreMessage');

        messageEl.textContent =
            'Please answer the questions first.';

        messageEl.style.color = '#ffffff';

        return;
    }

    // Calculate percentage
    const normalAnswers = answered - redFlags;

    let percentage = 0;

    if (normalAnswers > 0) {
        percentage = Math.round(
            (score / normalAnswers) * 100
        );
    }

    // Keep score between 0 and 100
    percentage = Math.min(100, Math.max(0, percentage));

    // Show score
    document.getElementById('scoreValue').textContent =
        percentage;

    // Update progress bar
    document.getElementById('progressFill').style.width =
        percentage + '%';

    // Show risk message
    const messageEl = document.getElementById('scoreMessage');

    if (redFlags > 0) {

        messageEl.textContent =
            `⚠️ ${redFlags} major red flag(s) detected. Please verify this internship opportunity carefully.`;

        messageEl.style.color = '#ef4444';

    } else if (percentage >= 80) {

        messageEl.textContent =
            '🟢 Low Risk - Opportunity appears legitimate.';

        messageEl.style.color = '#10b981';

    } else if (percentage >= 60) {

        messageEl.textContent =
            '🟡 More Verification Needed - Do more research before applying.';

        messageEl.style.color = '#f59e0b';

    } else {

        messageEl.textContent =
            '🔴 High Risk - Verify this opportunity carefully before proceeding.';

        messageEl.style.color = '#ef4444';
    }
}


function resetForm() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.checked = false);
    document.getElementById('companyName').value = '';
    document.getElementById('scoreValue').textContent = '0';
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('scoreMessage').textContent = 'Answer questions to calculate score';
    document.getElementById('scoreMessage').style.color = 'rgba(255,255,255,0.75)';
}
