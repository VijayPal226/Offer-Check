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
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14'];
    let score = 0;
    let answered = 0;
    let redFlags = 0;

    questions.forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected) {
            answered++;
            if (selected.value === 'yes') {
                if (q === 'q9') {
                    redFlags++; // Question 9 is a red flag if yes
                } else {
                    score++;
                }
            }
        }
    });

    // Calculate percentage
    const percentage = answered > 0 ? Math.round((score / (answered - redFlags)) * 100) : 0;
    
    // Update display
    document.getElementById('scoreValue').textContent = percentage;
    document.getElementById('progressFill').style.width = percentage + '%';
    
    // Update message
    const messageEl = document.getElementById('scoreMessage');
    if (redFlags > 0) {
        messageEl.textContent = `⚠️ ${redFlags} red flag(s) detected - Be cautious there is finicial loss check it carefully \ncheck this internship link with any respect instutute,univertity,company!`;
        messageEl.style.color = '#ef4444';
    } else if (percentage >= 80) {
        messageEl.textContent = '✅ Good - Opportunity appears legitimate';
        messageEl.style.color = '#10b981';
    } else if (percentage >= 60) {
        messageEl.textContent = '⚠️ Moderate - Do more research';
        messageEl.style.color = '#f59e0b';
    } else if (percentage > 0) {
        messageEl.textContent = '❌ Poor - High risk opportunity';
        messageEl.style.color = '#ef4444';
    } else {
        messageEl.textContent = 'Answer questions to calculate score';
        messageEl.style.color = 'rgba(255,255,255,0.75)';
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
