
function initialSet() {

day = "mm/dd/yyyy"

spinner = document.getElementById('benefit_ticket_modal__content__resort_input')
checkbox = document.getElementById('benefit_ticket_modal__content__attestment_input')

checkbox.checked = true

//spinner.selectedIndex for stevens is 26
spinner.selectedIndex = 26
spinner.dispatchEvent(new Event('change', {bubbles: true}));

sleep(1000).then(() => {
	calendar = document.getElementById('benefit_ticket_modal__content__start_date')
	calendar.value = day

	button = document.getElementsByClassName('benefit_ticket_modal__option_submit primaryCTA')
	button[0].click()
});


	sleep(3000).then(() => {
		changeDate()
	});

}

function changeDate() {
	spinner.selectedIndex = 25
	spinner.dispatchEvent(new Event('change', {bubbles: true}));
		sleep(2000).then(() => {
		initialSet()
	});
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


