function startCountdown() {
            // Get the selected date from the input
            var selectedDate = new Date(document.getElementById('datepicker').value);

            // Update the countdown every second
            var countdownInterval = setInterval(function() {
                // Get the current date and time
                var currentDate = new Date();

                // Calculate the difference in milliseconds
                var difference = selectedDate - currentDate;

                // Check if the countdown is over
                if (difference <= 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('countdown').innerHTML = "Completed Countdown !";
                } else {
                    // Calculate days, hours, minutes, and seconds
                    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

                    // Display the countdown
                    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";
                }
            }, 1000); // Update every second
        }
