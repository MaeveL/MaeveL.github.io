$("#myForm").submit(handleSubmit)

function handleSubmit(event) {
	console.log(event)
	event.preventDefault()
var input = $('#name-input').val()

$('#target').html(input)
}