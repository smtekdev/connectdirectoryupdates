
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.main-nav').classList.toggle('active');
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'var(--primary)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'linear-gradient(135deg, var(--primary), #34495e)';
                header.style.boxShadow = 'var(--shadow)';
            }
        });
    
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.main-nav').classList.toggle('active');
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'var(--primary)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'linear-gradient(135deg, var(--primary), #34495e)';
                header.style.boxShadow = 'var(--shadow)';
            }
        });
            // View toggle functionality
        const viewButtons = document.querySelectorAll('.view-btn');
        const businessList = document.querySelector('.business-list');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const viewType = this.getAttribute('data-view');
                
                // Update active button
                viewButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Change view
                if (viewType === 'list') {
                    businessList.classList.remove('grid-view');
                    businessList.classList.add('list-view');
                } else {
                    businessList.classList.remove('list-view');
                    businessList.classList.add('grid-view');
                }
            });
        });

        // Sort functionality
        const sortSelect = document.getElementById('sort');
        sortSelect.addEventListener('change', function() {
            alert(`Sorting by: ${this.value}`);
            // Here you would implement actual sorting logic
        });


          // Country to States mapping
        const countryStates = {
            'usa': [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
                'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
                'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
                'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
                'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
                'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ],
            'uk': [
                'England', 'Scotland', 'Wales', 'Northern Ireland'
            ],
            'canada': [
                'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
                'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
                'Prince Edward Island', 'Quebec', 'Saskatchewan',
                'Northwest Territories', 'Nunavut', 'Yukon'
            ],
            'australia': [
                'New South Wales', 'Queensland', 'South Australia', 'Tasmania',
                'Victoria', 'Western Australia', 'Australian Capital Territory',
                'Northern Territory'
            ],
            'germany': [
                'Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg',
                'Bremen', 'Hamburg', 'Hesse', 'Lower Saxony',
                'Mecklenburg-Vorpommern', 'North Rhine-Westphalia', 'Rhineland-Palatinate',
                'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia'
            ]
        };

        // Get DOM elements
        const countrySelect = document.getElementById('country');
        const stateSelect = document.getElementById('state');

        // Function to update states based on selected country
        function updateStates() {
            const selectedCountry = countrySelect.value;
            
            // Clear current states
            stateSelect.innerHTML = '<option value="">All States</option>';
            
            // If a country is selected and it exists in our mapping
            if (selectedCountry && countryStates[selectedCountry]) {
                // Add states for the selected country
                countryStates[selectedCountry].forEach(state => {
                    const option = document.createElement('option');
                    option.value = state.toLowerCase().replace(/\s+/g, '_');
                    option.textContent = state;
                    stateSelect.appendChild(option);
                });
            }
            
            // Enable/disable state select based on country selection
            stateSelect.disabled = !selectedCountry;
        }

        // Add event listener to country select
        countrySelect.addEventListener('change', updateStates);

        // Simple JavaScript for filter interaction
        document.querySelector('.search-btn').addEventListener('click', function() {
            const selectedCountry = document.getElementById('country').value;
            const selectedState = document.getElementById('state').value;
            const selectedCategory = document.getElementById('category').value;
            const selectedRating = document.getElementById('rating').value;
            
            let message = 'Searching for businesses with filters:\n';
            if (selectedCountry) message += `• Country: ${document.getElementById('country').options[document.getElementById('country').selectedIndex].text}\n`;
            if (selectedState) message += `• State: ${document.getElementById('state').options[document.getElementById('state').selectedIndex].text}\n`;
            if (selectedCategory) message += `• Category: ${document.getElementById('category').options[document.getElementById('category').selectedIndex].text}\n`;
            if (selectedRating) message += `• Rating: ${document.getElementById('rating').options[document.getElementById('rating').selectedIndex].text}\n`;
            
            alert(message || 'Searching for all businesses...');
        });

        document.querySelector('.reset-btn').addEventListener('click', function() {
            document.querySelectorAll('.filters select').forEach(select => {
                select.selectedIndex = 0;
            });
            // Reset states dropdown
            stateSelect.innerHTML = '<option value="">All States</option>';
            stateSelect.disabled = false;
            alert('Filters have been reset!');

            
        });

        // Initialize states on page load
        updateStates();

        