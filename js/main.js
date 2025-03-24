var tempFontSize = 200,
	tempDotRadius = 4,
	tempDotDistance = 10;
function getProperFont(length) {
	var windowWidth = getWindowWidth();
	var windowHeight = getWindowHeight();
	tempFontSize = (windowWidth) / (length - 6) >= 200 ? 200 : (windowWidth) / (length - 6);
	if (tempFontSize < 80) {
		tempDotRadius = 1;
	} else if (tempFontSize < 100) {
		tempDotRadius = 2;
	} else if (tempFontSize < 150) {
		tempDotRadius = 3;
	} else {
		tempDotRadius = 4;
	}
	tempDotDistance = tempDotRadius * 2 + 2;

}
function getWindowWidth() {
	return document.body.clientWidth;
}
function getWindowHeight() {
	return document.body.clientHeight;
}
getProperFont(18);
var pc = new particleChar({ fontColor: "#76A4D4", fontSize: tempFontSize, dotRadius: tempDotRadius, dotDistance: tempDotDistance });
pc.queueCreate({
	text: "亲爱的曹操",
	showTypeAfter: "top",
	showTime: 1800,
	v1: 0.15,
	waitTime: 0,
	callbackBefore: function () {
		document.body.scrollTop = 0;
	},
}, {
	text: "一直以来",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "遇到困难时",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#76A4D4",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "你总是陪在我身边",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "开导我，安慰我",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#76A4D4",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "时常觉得你就像一个大姐姐",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "总是温暖着我",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#76A4D4",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "不知不觉",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "我们已经一起走过这么多年",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "我们以后一定",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#76A4D4",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "还能一直陪伴在彼此身边",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "二十岁，不管有多么迷茫",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#76A4D4",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "都有我陪在你身边",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "生日快乐！",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#76A4D4",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
}, {
	text: "爱你！",
	showTypeBefore: "top",
	showOpen: false,
	fontColor: "#95f0c0",
	showTime: 1200,
	callbackAfter: function () {
		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
	}
})
// window.onresize = function () {
// 	getProperFont(pc.getText().length);
// 	pc.setOption({ fontSize: tempFontSize, dotRadius: tempDotRadius, dotDistance: tempDotDistance });
// 	pc.repaint();
// 	if (document.body.style.overflow == "auto") {
// 		document.getElementById('container').style.top = "-" + getWindowHeight() / 2 + "px";
// 	}
// };
