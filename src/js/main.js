/**
 * EXAMPLE CONTENT
 * Feel free to remove it.
 */

import hangerBackground from '../assets/images/hanger_background.svg';
import instructionBox from '../assets/images/instruction_box.svg';
import arm1 from '../assets/images/simplemech-arm_1.svg';
import arm2 from '../assets/images/simplemech-arm_2.svg';
import leg1 from '../assets/images/simplemech-leg1.svg';
import leg2 from '../assets/images/simplemech-leg2.svg';
import chest from '../assets/images/simplemech-chest.svg';
import head from '../assets/images/simplemech-head.svg';
import overlayBoxlarge from '../assets/images/start_overlay-box-large.svg';
import startButton from '../assets/images/start_button.svg';
import feedback from '../assets/images/feedback_overlay-box-large.svg';
import closeButton from '../assets/images/close-button.svg';
import logo from '../assets/images/logo-simpleshow.svg';

document.querySelector('#app').innerHTML = `
	<div id="scenario">
		<div id="interaction">
			<img src="${hangerBackground}" alt="Background image"/>
			<img class="instruction-box" src="${instructionBox}" alt="Background image"/>
			<div id="arm-2-zone" class="drop-zone"></div>
			<div id="arm-1-zone" class="drop-zone"></div>
			<div id="leg-1-zone" class="drop-zone"></div>
			<div id="leg-2-zone" class="drop-zone"></div>
			<div id="chest-zone" class="drop-zone"></div>
			<div id="head-zone" class="drop-zone"></div>
			<div class="arm-1 drag-item">
				<img src="${arm1}" alt="Left arm piece"/>
			</div>
			<div class="arm-2 drag-item">
				<img src="${arm2}" alt="Right arm piece"/>
			</div>
			<div class="leg-1 drag-item">
				<img src="${leg1}" alt="Left leg piece"/>
			</div>
			<div class="leg-2 drag-item">
				<img src="${leg2}" alt="Right leg piece"/>
			</div>
			<div class="chest drag-item">
				<img src="${chest}" alt="Chest piece"/>
			</div>
			<div class="head drag-item">
				<img src="${head}" alt="head piece"/>
			</div>
		</div>


		<div id="start">
			<div class="overlay-gray"></div>
			<img src="${overlayBoxlarge}" alt="Start modal image"/>
			<button><img id="start-button" src="${startButton}" alt="Start button for start overlay"/></button>
		</div>

		<div id="end" class="hide">
			<div class="overlay-gray"></div>
			<img src="${feedback}" alt="End modal image"/>
			<button><img id="close-button" src="${closeButton}" alt="Close button for modal"/></button>
		</div>
		</div>

		<div id="finish" class="hide">
			<img src="${logo}" alt="End modal image"/>
		</div>
	</div>
`;

$('#start-button').click(function () {
	$('#start').addClass('hide')
})

$('#close-button').click(function () {
$('#scenario').addClass('hide')
$('#end').addClass('hide')
$('#start').addClass('hide')
$('#interaction').addClass('hide')
$('#finish').removeClass('hide')
})

$('.drag-item').draggable({
	containment: '#interaction',
	cursor: 'move',
	snap: '.drop-zone',
	revert: 'invalid'
})

$(".drag-item").data("dropped", false);


var dropCounter = 0

$(".drop-zone").droppable({
	drop: function (event, domElem) {
		domElem.draggable.css({
			top:  $(this).position().top,
			left: $(this).position().left,
		})
		if (!domElem.draggable.data('dropped')) {
			domElem.draggable.data('dropped', true)
			dropCounter += 1
			if (dropCounter === 6) {
				$('#end').removeClass('hide')
			}
		}
	}
});

$("#arm-1-zone").droppable({
	accept: ".arm-1",
});
$("#arm-2-zone").droppable({
	accept: ".arm-2",
});
$("#leg-1-zone").droppable({
	accept: ".leg-1",
});
$("#leg-2-zone").droppable({
	accept: ".leg-2",
});
$("#chest-zone").droppable({
	accept: ".chest",
});
$("#head-zone").droppable({
	accept: ".head",
});
