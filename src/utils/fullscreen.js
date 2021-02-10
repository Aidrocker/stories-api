const launchFullScreen = element => {
	if (element.requestFullScreen) {
		element.requestFullScreen()
	}
	else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen()
	}
	else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen()
	}
}

const cancelFullscreen = () => {
	if (document.cancelFullScreen) {
		document.cancelFullScreen()
	}
	else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen()
	}
	else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen()
	}
}

export {
	launchFullScreen,
	cancelFullscreen
}