<!DOCTYPE html>
<html lang="ru">
<head>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="theme-color" content="#4CAF50">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="деньГа">
<link rel="apple-touch-icon" href="icons/icon-192.png">
<link rel="manifest" href="manifest.json">
<title>деньГа</title>
<link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
<style>
/* Контейнер стопки */
.card-stack-btn {
 position: fixed;
 bottom: 40px;
 right: 20px;
 width: 100px;
 cursor: pointer;
 perspective: 800px;
 z-index: 999;
 display: none;
}
.card-stack-btn.expanded {
 z-index: 1001;
}
/* Карта */
.card {
 position: absolute;
 width: 80px;
 height: 50px;
 border-radius: 8px;
 border: 1px solid #ccc;
 box-shadow: 0 3px 6px rgba(0,0,0,0.3);
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: Arial, sans-serif;
 font-weight: bold;
 color: white;
 font-size: 18px;
 transform-origin: top center;
 transition: transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1), box-shadow 0.4s;
 user-select: none;
}
/* Цвета и подписи карт */
.card[data-bank="Сбер"] { background-color: #0f9d58; }
.card[data-bank="Яндекс"] { background-color: #ff6eb4; }
.card[data-bank="Тинькофф"] { background-color: #FFD700; color:#000; }
.card[data-bank="Альфа"] { background-color: #FF0000; }
.card[data-bank="ВТБ"] { background-color: #1E90FF; }
.card[data-bank="Халва"] { background-color: #A9A9A9; color:#000; }
.card[data-bank="Уралсиб"] { background-color: #800080; }
.card[data-bank="Другие"] { background-color: #000000; }
/* Положение карт в сложенном состоянии */
.card-stack-btn:not(.expanded) .card:nth-child(1) { transform: translate(0, 0) rotate(0deg); z-index: 8; }
.card-stack-btn:not(.expanded) .card:nth-child(2) { transform: translate(0, -5px) rotate(0deg); z-index: 7; }
.card-stack-btn:not(.expanded) .card:nth-child(3) { transform: translate(0, -10px) rotate(0deg); z-index: 6; }
.card-stack-btn:not(.expanded) .card:nth-child(4) { transform: translate(0, -15px) rotate(0deg); z-index: 5; }
.card-stack-btn:not(.expanded) .card:nth-child(5) { transform: translate(0, -20px) rotate(0deg); z-index: 4; }
.card-stack-btn:not(.expanded) .card:nth-child(6) { transform: translate(0, -25px) rotate(0deg); z-index: 3; }
.card-stack-btn:not(.expanded) .card:nth-child(7) { transform: translate(0, -30px) rotate(0deg); z-index: 2; }
.card-stack-btn:not(.expanded) .card:nth-child(8) { transform: translate(0, -35px) rotate(0deg); z-index: 1; }
/* Положение карт при раскрытии */
.card-stack-btn.expanded .card {
 transition: transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1), box-shadow 0.4s;
}
.card-stack-btn.expanded .card:nth-child(1) { transform: translate(0, 0px) rotate(0deg) scale(1.05); z-index: 1; }
.card-stack-btn.expanded .card:nth-child(2) { transform: translate(0, -70px) rotate(-5deg) scale(1.05); z-index: 2; }
.card-stack-btn.expanded .card:nth-child(3) { transform: translate(0, -140px) rotate(3deg) scale(1.05); z-index: 3; }
.card-stack-btn.expanded .card:nth-child(4) { transform: translate(0, -210px) rotate(-3deg) scale(1.05); z-index: 4; }
.card-stack-btn.expanded .card:nth-child(5) { transform: translate(0, -280px) rotate(2deg) scale(1.05); z-index: 5; }
.card-stack-btn.expanded .card:nth-child(6) { transform: translate(0, -350px) rotate(-2deg) scale(1.05); z-index: 6; }
.card-stack-btn.expanded .card:nth-child(7) { transform: translate(0, -420px) rotate(4deg) scale(1.05); z-index: 7; }
.card-stack-btn.expanded .card:nth-child(8) { transform: translate(0, -490px) rotate(-4deg) scale(1.05); z-index: 8; }
.card .bank-buttons {
 position: absolute;
 left: 110%;
 top: 60%;
 transform: translateY(-50%);
 display: flex;
 gap: 5px;
 opacity: 0;
 pointer-events: none;
 transition: opacity 0.3s;
}
.card-stack-btn.expanded .card .bank-buttons {
 opacity: 0;
 pointer-events: auto;
}
.bank-buttons button {
 background: none;
 border: none;
 color: transparent;
 opacity: 0;
 width: 40px;
 height: 40px;
 cursor: pointer;
 transition: opacity 0.3s, color 0.3s;
}
.card-stack-btn.expanded .card .bank-buttons button {
 opacity: 0;
 color: transparent;
}
/* Оверлей с усиленным затемнением */
#overlay {
 position: fixed;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 background-color: rgba(0,0,0,0.85);
 display: none;
 z-index: 1000;
}
html, body {
 overflow-x: hidden;
 touch-action: pan-y;
 margin: 0;
 padding: 0;
 font-family: Arial, sans-serif;
 background-color: #f2f2f2;
 user-select: none;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
}
header {
 background: linear-gradient(145deg, #4CAF50, #2E7D32);
 color: white;
 font-weight: bold;
 text-align: left;
 font-size: 32px;
 padding: 30px 40px;
 margin: 15px;
 border-radius: 16px;
 box-shadow: 0 6px 20px rgba(0,0,0,0.25), inset 0 2px 6px rgba(255,255,255,0.3);
 position: relative;
 overflow: hidden;
 font-family: 'MedievalSharp', cursive;
}
.shine-container {
 position: absolute;
 top: 28px;
 left: 11%;
 width: 78%;
 height: 163px;
 overflow: hidden;
 pointer-events: none;
}
.shine-container::before {
 content: '';
 position: absolute;
 top: 0;
 left: -30%;
 width: 40%;
 height: 100%;
 background: linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.1) 60%);
 transform: skewX(-25deg);
 animation: shine 10s infinite;
}
@keyframes shine {
 0% { left: -120%; opacity: 0; }
 5% { opacity: 1; }
 70% { left: 100%; opacity: 0.1; }
 100% { left: 100%; opacity: 0; }
}
header::after {
 content: '';
 position: absolute;
 top: 50px;
 right: 50px;
 width: 40px;
 height: 28px;
 background: linear-gradient(135deg, #d4af37, #f5e29f);
 border-radius: 4px;
 box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
}
.header-box {
 display: inline-block;
 background: transparent;
 color: #fff;
 font-size: 36px;
 letter-spacing: 1px;
 text-shadow: 0 0 8px rgba(0,0,0,0.4);
}
nav {
 display: flex;
 justify-content: space-around;
 margin: 20px 0;
}
nav button {
 padding: 12px 22px;
 font-size: 14px;
 font-weight: bold;
 border-radius: 10px;
 border: 2px solid #0b5ea8;
 background: white;
 color: #4CAF50;
 cursor: pointer;
 transition: background 0.2s, color 0.2s;
 z-index: 1;
}
nav button:hover {
 background: linear-gradient(135deg, #A8E6A2, #45A049);
 color: white;
}
button:hover {
 background-color: #0b7dda;
}
@keyframes spring {
 0% { transform: scale(1); }
 10% { transform: scale(0.7); }
 20% { transform: scale(1.3); }
 30% { transform: scale(0.8); }
 40% { transform: scale(1.2); }
 50% { transform: scale(0.9); }
 60% { transform: scale(1.1); }
 70% { transform: scale(0.95); }
 80% { transform: scale(1.05); }
 90% { transform: scale(0.99); }
 100% { transform: scale(1); }
}
.springing {
 animation: spring 0.95s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
main {
 padding: 20px;
 text-align: center;
}
section {
 display: none;
}
#categoriesList {
 display: block;
 margin-top: 15px;
}
#categoriesList button {
 display: block;
 width: 65%;
 margin: 10px 0;
 padding: 16px 20px;
 font-size: 18px;
 font-weight: bold;
 border-radius: 10px;
 position: relative;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 background: linear-gradient(135deg, #5A7DE1, #A0D4FA);
 color: white;
 border: 2px solid #0b5ea8;
 text-align: left;
 margin-left: 20px;
}
#sparkCanvas {
 position: absolute;
 top: 0;
 left: 0;
 pointer-events: none;
 z-index: 1000;
}
.action-modal {
 position: fixed;
 background: rgba(65, 105, 225, 1);
 border-radius: 20px;
 box-shadow: 0 7px 19px rgba(0,0,0,0.25);
 padding: 25px;
 display: flex;
 gap: 10px;
 flex-direction: column;
 animation: fadeIn 0.1s ease-out;
 z-index: 9999;
}
.action-modal button {
 background: linear-gradient(135deg, rgba(244,67,54,1), rgba(255,153,153,1));
 color: white;
 font-weight: bold;
 padding: 20px;
 border-radius: 38px;
 transition: background 0.2s;
}
.action-modal button.rename {
 background: #2196F3;
}
.action-modal button:hover {
 opacity: 0.85;
}
@keyframes fadeIn {
 from { transform: scale(0.8); opacity: 0; }
 to { transform: scale(1); opacity: 1; }
}
.rename-container {
 margin-top: 5px;
 display: flex;
 justify-content: center;
}
.rename-container input {
 padding: 5px;
 margin-right: 5px;
 width: 60%;
 max-width: 200px;
}
.rename-container button {
 padding: 5px 10px;
}
.placeholder {
 border: 2px dashed #2196F3;
 margin-bottom: 10px;
 height: 40px;
}
.dragging {
 opacity: 0.7;
 position: absolute;
 z-index: 1000;
 pointer-events: none;
}
#statsCategories {
 margin-top: 10px;
 text-align: left;
 max-width: 600px;
 margin-inline: auto;
}
.stat-item {
 background: #ffffff;
 border: 2px solid #4CAF50;
 border-radius: 10px;
 padding: 10px 14px;
 margin-bottom: 8px;
 font-size: 15px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
#settingsSubmenu {
 display: none;
 margin-top: 15px;
 padding: 10px;
 background: #fff;
 border-radius: 12px;
 box-shadow: 0 2px 6px rgba(0,0,0,0.2);
 transition: all 0.3s ease;
}
#settingsCategories button {
 display: block;
 width: 100%;
 margin-bottom: 8px;
 padding: 8px 12px;
 background: #2196F3;
 color: #fff;
 border: none;
 border-radius: 6px;
 text-align: left;
 cursor: pointer;
 transition: background 0.3s;
}
#settingsCategories button:hover {
 background: #0b7dda;
}
#settings button {
 display: block;
 width: 100%;
 margin-bottom: 10px;
 padding: 10px 15px;
 background: linear-gradient(135deg, #5A7DE1, #A0D4FA);
 color: #fff;
 border: none;
 border-radius: 6px;
 text-align: left;
 cursor: pointer;
 transition: background 0.3s;
}
#settings button:hover {
 background: #0b7dda;
}
.totals-box {
 background: #4CAF50;
 border-radius: 12px;
 padding: 15px;
 color: white;
 font-weight: bold;
 text-align: center;
 margin-top: 15px;
 font-size: 18px;
}
#totalsContainer {
 background: #4CAF50;
 border-radius: 12px;
 padding: 20px;
 color: white;
 font-weight: bold;
 text-align: center;
 margin-top: 20px;
}
#totalsContainer h3 {
 margin-top: 0;
 font-size: 20px;
}
#totalsContainer p {
 margin: 8px 0;
 font-size: 18px;
}
.app-container {
 margin-left: auto;
 margin-right: auto;
 padding-left: 15px;
 padding-right: 15px;
 max-width: 1200px;
 border-left: 5px solid #0b5ea8;
 border-right: 5px solid #0b5ea8;
 box-sizing: border-box;
 background-color: #f2f2f2;
}
@media (max-width: 600px) {
 .app-container {
 padding-left: 8px;
 padding-right: 8px;
 border-left: 2px solid #0b5ea8;
 border-right: 2px solid #0b5ea8;
 }
}
#clock {
 opacity: 0;
 background: transparent !important;
 box-shadow: none !important;
 color: transparent !important;
}
.switch {
 position: relative;
 display: inline-block;
 width: 46px;
 height: 26px;
 vertical-align: middle;
}
.switch input {
 opacity: 0;
 width: 0;
 height: 0;
}
.slider {
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: #ccc;
 transition: .3s;
 border-radius: 34px;
}
.slider:before {
 position: absolute;
 content: "";
 height: 20px;
 width: 20px;
 left: 3px;
 bottom: 3px;
 background-color: white;
 transition: .3s;
 border-radius: 50%;
}
input:checked + .slider {
 background-color: #4CAF50;
}
input:checked + .slider:before {
 transform: translateX(20px);
}
.limit-badge {
 display: inline-block;
 padding: 4px 10px;
 margin-left: 8px;
 background: #f0f0f0;
 border-radius: 12px;
 box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1);
 font-size: 14px;
 font-weight: bold;
 color: #4CAF50;
 min-width: 50px;
 text-align: center;
 transition: background 0.3s, transform 0.2s;
 cursor: pointer;
}
.limit-badge:hover {
 background: #e0ffe0;
 transform: scale(1.05);
}
.limit-badge.active {
 background: #4CAF50;
 color: white;
}
.limit-badge:active {
 animation: pressAnimation 0.2s ease-out;
}
@keyframes pressAnimation {
 0% { transform: scale(1); background: #d0d0d0; }
 50% { transform: scale(0.9); background: #b0b0b0; }
 100% { transform: scale(1); background: #f0f0f0; }
}
.limit-badge.active:active {
 animation: pressAnimationActive 0.2s ease-out;
}
@keyframes pressAnimationActive {
 0% { transform: scale(1); background: #4CAF50; }
 50% { transform: scale(0.9); background: #3d8b40; }
 100% { transform: scale(1); background: #4CAF50; }
}
.settings-row {
 display: flex;
 align-items: center;
 background: #fff;
 border: 1px solid #ddd;
 border-radius: 8px;
 padding: 8px 12px;
 margin-bottom: 8px;
}
.settings-row .name {
 font-weight: bold;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 flex: 1;
}
.limit-badge {
 margin: 0 10px;
 min-width: 60px;
 text-align: center;
}
.settings-row .switch {
 flex-shrink: 0;
}
#background {
 position: fixed;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 background: white;
 z-index: -1;
}
body,
.app-container,
header,
nav,
main,
section,
#statsCategories,
#settingsSubmenu,
#adminSubmenu {
 background: transparent !important;
 box-shadow: none !important;
}
button {
 background: rgba(255,255,255,0.2);
 backdrop-filter: blur(5px);
 border: 1px solid rgba(255,255,255,0.3);
}
.action-modal {
 background: rgba(255,255,255,0.15) !important;
 backdrop-filter: blur(10px);
 box-shadow: none !important;
}
#background {
 position: fixed;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 background: white;
 z-index: -1;
}
#header-layer header {
 background: linear-gradient(135deg, #E6FFE6, #45A049);
 color: #0b5ea8;
 font-weight: bold;
 text-align: center;
 font-size: 42px;
 padding: 25px;
 border-radius: 0 0 12px 12px;
 font-family: 'MedievalSharp', cursive;
 box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}
nav {
 margin-top: 50px;
}
#header-layer {
 position: relative;
 width: 100%;
 z-index: -2;
 overflow: visible;
}
.header-box {
 display: inline-block;
 background: #4CAF50;
 color: white;
 padding: 60px 93px;
 border-radius: 12px;
 border: 2px solid rgba(255,255,255,0.8);
 box-shadow: 0 0 10px #4CAF50, 0 0 20px rgba(11,94,168,0.6);
 font-family: 'MedievalSharp', cursive;
 font-size: 34px;
}
#scrollLayer {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 50px;
 pointer-events: none;
 z-index: 1000000;
}
#scrollBar {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 0;
 background: linear-gradient(180deg, #4CAF50, #81C784);
 z-index: -1;
 pointer-events: none;
 transition: height 0.1s ease-out;
}
/* Стили для модалки истории */
.history-modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 background: white;
 padding: 20px;
 border-radius: 10px;
 box-shadow: 0 0 20px rgba(0,0,0,0.5);
 z-index: 1001;
 max-width: 90vw;
 max-height: 80vh;
 overflow-y: auto;
 -webkit-overflow-scrolling: touch;
 touch-action: auto;
}
.history-modal table {
 width: 100%;
 border-collapse: collapse;
 margin-bottom: 15px;
 table-layout: fixed;
 display: block;
 overflow-x: auto;
 overflow-y: auto;
 max-height: 60vh;
 white-space: nowrap;
 touch-action: auto;
 -webkit-overflow-scrolling: touch;
}
.history-modal th,
.history-modal td {
 border: 1px solid #ddd;
 padding: 8px;
 text-align: left;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 box-sizing: border-box;
 max-width: 100px;
}
.history-modal th {
 background-color: #f2f2f2;
 font-weight: bold;
}
.history-modal button {
 padding: 10px 20px;
 background: #4CAF50;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 width: 100%;
}
.history-modal button:hover {
 background: #45a049;
}
.history-filter {
 margin-bottom: 15px;
 display: flex;
 gap: 10px;
 flex-wrap: wrap;
}
.history-filter select {
 padding: 8px;
 border-radius: 5px;
 border: 1px solid #ddd;
 background: #f9f9f9;
 font-size: 14px;
}
.close-btn {
 position: absolute;
 top: 10px;
 right: 10px;
 width: 24px;
 height: 24px;
 background: transparent;
 border: none;
 cursor: pointer;
 font-size: 0;
 color: #333;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color 0.2s;
}
.close-btn:hover {
 color: #f44336;
}
.close-btn::before,
.close-btn::after {
 content: '';
 position: absolute;
 width: 16px;
 height: 2px;
 background: currentColor;
}
.close-btn::before {
 transform: rotate(45deg);
}
.close-btn::after {
 transform: rotate(-45deg);
}
#hawkBlocker {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0,0,0,0.6);
 z-index: 9998;
 pointer-events: auto;
}
#hawkBlocker:not(.hawk-mode) {
 display: none;
}
#categoriesList button {
 pointer-events: auto;
}
#exitHawkBtn {
 pointer-events: auto;
}
</style>
</head>
<body>
<div id="overlay"></div>
<div class="card-stack-btn" id="cardStack">
 <div class="card" data-bank="Сбер"><span>Сбер</span><div class="bank-buttons"><button data-bank="Сбер">Сбер</button></div></div>
 <div class="card" data-bank="Яндекс"><span>Я</span><div class="bank-buttons"><button data-bank="Яндекс">Яндекс</button></div></div>
 <div class="card" data-bank="Тинькофф"><span>Т</span><div class="bank-buttons"><button data-bank="Тинькофф">Тинькофф</button></div></div>
 <div class="card" data-bank="Альфа"><span>А</span><div class="bank-buttons"><button data-bank="Альфа">Альфа</button></div></div>
 <div class="card" data-bank="ВТБ"><span>ВТБ</span><div class="bank-buttons"><button data-bank="ВТБ">ВТБ</button></div></div>
 <div class="card" data-bank="Халва"><span>Халва</span><div class="bank-buttons"><button data-bank="Халва">Халва</button></div></div>
 <div class="card" data-bank="Уралсиб"><span>Урал</span><div class="bank-buttons"><button data-bank="Уралсиб">Уралсиб</button></div></div>
 <div class="card" data-bank="Другие"><span>Другие</span><div class="bank-buttons"><button data-bank="Другие">Другие</button></div></div>
</div>
<div id="header-layer">
 <header>
 <span class="header-box">дѢньга</span>
 </header>
 <div class="shine-container"></div>
</div>
<div id="scrollBar"></div>
<div class="app-container">
 <nav>
 <button onclick="spring(this); showSection('expenses')">Расходы</button>
 <button onclick="spring(this); showSection('stats')">Статистика</button>
 <button onclick="spring(this); showSection('settings')">Настройки</button>
 </nav>
 <main>
 <section id="expenses">
 <h2>Расходы</h2>
 <p id="weeklyExpenses"></p>
 <button onclick="addCategory(this)">Добавить категорию</button>
 <div id="newCategoryContainer"></div>
 <div id="categoriesList"></div>
 </section>
 <section id="stats">
 <h2>Статистика</h2>
 <p></p>
 <h3>Категории</h3>
 <div id="statsCategories"></div>
 <h3>Диаграмма расходов</h3>
 <canvas id="statsChart" width="400" height="400"></canvas>
 <h3>Итого расходов</h3>
 <div id="totalsContainer"></div>
 </section>
 <section id="settings">
 <h2>Настройки</h2>
 <p></p>
 <div id="settingsSubmenu">
 <h3>Категории</h3>
 <div id="settingsCategories"></div>
 </div>
 </section>
 </main>
</div>
<div id="background"></div>
<div id="scrollLayer"></div>
<div id="hawkBlocker"></div>
<canvas id="sparkCanvas"></canvas>
<script>
let cards = [];
const stack = document.getElementById('cardStack');
const overlay = document.getElementById('overlay');
const cardStack = document.getElementById('cardStack');
let chartInstance = null;

function initCards() {
  if (!stack || !overlay) {
    console.error('Элементы stack или overlay не найдены');
    return;
  }
  const getCards = () => Array.from(stack.querySelectorAll('.card'));
  cards = getCards();

  function moveCardToTop(bankName) {
    if (cards.length === 0) return;
    const card = cards.find(c => c.dataset.bank === bankName);
    if (!card) return;
    stack.prepend(card);
    cards = [card, ...cards.filter(c => c !== card)];
    localStorage.setItem('selectedBank', bankName);
    if (!stack.classList.contains('expanded')) {
      updateCardStyles();
    }
    initCardListeners();
  }

  function updateCardStyles() {
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
      card.style.transform = `translate(0, ${-index * 5}px) rotate(0deg)`;
    });
  }

  function toggleStack() {
    stack.classList.toggle('expanded');
    overlay.style.display = stack.classList.contains('expanded') ? 'block' : 'none';
    if (!stack.classList.contains('expanded')) {
      updateCardStyles();
    } else {
      cards.forEach(card => {
        card.style.transform = '';
        card.style.zIndex = '';
      });
    }
  }

  stack.addEventListener('click', e => {
    if (e.target.closest('button')) return;
    toggleStack();
  });

  overlay.addEventListener('click', () => {
    stack.classList.remove('expanded');
    overlay.style.display = 'none';
    updateCardStyles();
  });

  stack.querySelectorAll('.bank-buttons button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const bankName = btn.dataset.bank || btn.textContent.trim();
      moveCardToTop(bankName);
      stack.classList.remove('expanded');
      overlay.style.display = 'none';
      updateCardStyles();
    });
  });

  function initCardListeners() {
    getCards().forEach(card => {
      card.removeEventListener('click', handleCardClick);
      card.addEventListener('click', handleCardClick);
    });
  }

  function handleCardClick(e) {
    if (!stack.classList.contains('expanded')) return;
    e.stopPropagation();
    const bankName = this.dataset.bank;
    moveCardToTop(bankName);
    stack.classList.remove('expanded');
    overlay.style.display = 'none';
    updateCardStyles();
  }

  initCardListeners();
  updateCardStyles();
  const savedBank = localStorage.getItem('selectedBank');
  if (savedBank) {
    setTimeout(() => moveCardToTop(savedBank), 100);
  }
}

function spring(element) {
  element.classList.add('springing');
  element.addEventListener('animationend', () => {
    element.classList.remove('springing');
  }, { once: true });
}

function showSection(id) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => sec.style.display = 'none');
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.style.display = 'block';
  } else {
    console.warn(`Секция с id "${id}" не найдена`);
  }
  if (id === 'expenses') {
    cardStack.style.display = 'block';
    renderCategories();
    calculateWeeklyExpenses();
  } else {
    cardStack.style.display = 'none';
    if (cardStack.classList.contains('expanded')) {
      cardStack.classList.remove('expanded');
      overlay.style.display = 'none';
      updateCardStyles();
    }
  }
  if (id === 'stats') {
    renderStats();
  }
  if (id === 'settings') {
    renderSettings();
  }
}

function addCategory(button) {
  spring(button);
  const container = document.getElementById('newCategoryContainer');
  if (!container) return;
  container.innerHTML = `
    <input type="text" id="newCategoryName" placeholder="Название категории">
    <button onclick="saveCategory(this)">Сохранить</button>
  `;
}

function saveCategory(button) {
  spring(button);
  const input = document.getElementById('newCategoryName');
  if (!input) return;
  const name = input.value.trim();
  if (name) {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push({ name, limit: 0, limitEnabled: false });
    localStorage.setItem('categories', JSON.stringify(categories));
    document.getElementById('newCategoryContainer').innerHTML = '';
    renderCategories();
    renderSettings();
  }
}

function renderCategories() {
  const list = document.getElementById('categoriesList');
  if (!list) return;
  list.innerHTML = '';
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  categories.forEach((cat, index) => {
    const button = document.createElement('button');
    button.textContent = cat.name;
    button.dataset.index = index;
    button.addEventListener('click', e => showActionModal(e, cat.name, index));
    button.addEventListener('touchstart', e => startDrag(e, index));
    button.addEventListener('dragstart', e => startDrag(e, index));
    list.appendChild(button);
  });
  addDragPlaceholders();
  calculateWeeklyExpenses();
}

function addDragPlaceholders() {
  const list = document.getElementById('categoriesList');
  if (!list) return;
  const placeholders = document.querySelectorAll('.placeholder');
  placeholders.forEach(p => p.remove());
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  categories.forEach((_, index) => {
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder';
    placeholder.dataset.index = index;
    placeholder.addEventListener('dragover', e => e.preventDefault());
    placeholder.addEventListener('drop', e => drop(e, index));
    list.insertBefore(placeholder, list.children[index]);
  });
}

function startDrag(e, index) {
  e.dataTransfer?.setData('text/plain', index);
  const button = e.target;
  button.classList.add('dragging');
  setTimeout(() => {
    button.style.display = 'none';
  }, 0);
}

function drop(e, targetIndex) {
  e.preventDefault();
  const sourceIndex = e.dataTransfer?.getData('text/plain');
  const button = document.querySelector('.dragging');
  if (button) {
    button.style.display = 'block';
    button.classList.remove('dragging');
  }
  if (sourceIndex !== undefined) {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const [moved] = categories.splice(sourceIndex, 1);
    categories.splice(targetIndex, 0, moved);
    localStorage.setItem('categories', JSON.stringify(categories));
    renderCategories();
  }
}

function showActionModal(e, category, index) {
  e.stopPropagation();
  const modal = document.createElement('div');
  modal.className = 'action-modal';
  modal.style.left = `${e.clientX}px`;
  modal.style.top = `${e.clientY}px`;
  modal.innerHTML = `
    <button onclick="addExpense(this, '${category}', ${index})">Добавить расход</button>
    <button class="rename" onclick="renameCategory(this, '${category}', ${index})">Переименовать</button>
    <button onclick="deleteCategory(this, ${index})">Удалить</button>
    <button onclick="showHistory(this, '${category}')">История</button>
  `;
  document.body.appendChild(modal);
  setTimeout(() => {
    document.addEventListener('click', () => modal.remove(), { once: true });
  }, 0);
}

function addExpense(button, category, index) {
  spring(button);
  const modal = button.closest('.action-modal');
  if (!modal) return;
  modal.innerHTML = `
    <input type="number" id="expenseAmount" placeholder="Сумма">
    <input type="date" id="expenseDate">
    <button onclick="saveExpense(this, '${category}', ${index})">Сохранить</button>
  `;
}

function saveExpense(button, category, index) {
  spring(button);
  const amountInput = document.getElementById('expenseAmount');
  const dateInput = document.getElementById('expenseDate');
  if (!amountInput || !dateInput) return;
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value || new Date().toISOString().split('T')[0];
  if (amount && !isNaN(amount)) {
    const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
    const selectedBank = localStorage.getItem('selectedBank') || 'Другие';
    history.push({
      category,
      amount,
      date,
      dateISO: new Date(date).toISOString(),
      bank: selectedBank
    });
    localStorage.setItem('expenseHistory', JSON.stringify(history));
    button.closest('.action-modal').remove();
    calculateWeeklyExpenses();
    renderStats();
  }
}

function renameCategory(button, category, index) {
  spring(button);
  const modal = button.closest('.action-modal');
  if (!modal) return;
  modal.innerHTML = `
    <div class="rename-container">
      <input type="text" id="renameInput" value="${category}">
      <button onclick="saveRename(this, ${index})">Сохранить</button>
    </div>
  `;
}

function saveRename(button, index) {
  spring(button);
  const input = document.getElementById('renameInput');
  if (!input) return;
  const newName = input.value.trim();
  if (newName) {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const oldName = categories[index].name;
    categories[index].name = newName;
    localStorage.setItem('categories', JSON.stringify(categories));
    const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
    history.forEach(exp => {
      if (exp.category === oldName) {
        exp.category = newName;
      }
    });
    localStorage.setItem('expenseHistory', JSON.stringify(history));
    button.closest('.action-modal').remove();
    renderCategories();
    renderSettings();
  }
}

function deleteCategory(button, index) {
  spring(button);
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const categoryName = categories[index].name;
  categories.splice(index, 1);
  localStorage.setItem('categories', JSON.stringify(categories));
  const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
  const updatedHistory = history.filter(exp => exp.category !== categoryName);
  localStorage.setItem('expenseHistory', JSON.stringify(updatedHistory));
  button.closest('.action-modal').remove();
  renderCategories();
  renderSettings();
  calculateWeeklyExpenses();
  renderStats();
}

function showHistory(button, category) {
  spring(button);
  const modal = document.createElement('div');
  modal.className = 'history-modal';
  const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
  const filteredHistory = history.filter(exp => exp.category === category);
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const banks = ['Сбер', 'Яндекс', 'Тинькофф', 'Альфа', 'ВТБ', 'Халва', 'Уралсиб', 'Другие'];

  let tableHTML = `
    <div class="history-filter">
      <select id="bankFilter" onchange="updateHistoryTable('${category}')">
        <option value="">Все банки</option>
        ${banks.map(bank => `<option value="${bank}">${bank}</option>`).join('')}
      </select>
      <select id="dateFilter" onchange="updateHistoryTable('${category}')">
        <option value="">Все даты</option>
        ${[...new Set(filteredHistory.map(exp => exp.date))].sort().map(date => `<option value="${date}">${date}</option>`).join('')}
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Сумма</th>
          <th>Дата</th>
          <th>Банк</th>
        </tr>
      </thead>
      <tbody id="historyTableBody">
      </tbody>
    </table>
    <button onclick="this.closest('.history-modal').remove()">Закрыть</button>
    <button class="close-btn" onclick="this.closest('.history-modal').remove()"></button>
  `;
  modal.innerHTML = tableHTML;
  document.body.appendChild(modal);
  updateHistoryTable(category);
  button.closest('.action-modal').remove();
}

function updateHistoryTable(category) {
  const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
  const bankFilter = document.getElementById('bankFilter')?.value || '';
  const dateFilter = document.getElementById('dateFilter')?.value || '';
  let filteredHistory = history.filter(exp => exp.category === category);
  if (bankFilter) {
    filteredHistory = filteredHistory.filter(exp => exp.bank === bankFilter);
  }
  if (dateFilter) {
    filteredHistory = filteredHistory.filter(exp => exp.date === dateFilter);
  }
  const tbody = document.getElementById('historyTableBody');
  if (!tbody) return;
  tbody.innerHTML = filteredHistory.map(exp => `
    <tr>
      <td>${exp.amount.toFixed(2)} ₽</td>
      <td>${exp.date}</td>
      <td>${exp.bank}</td>
    </tr>
  `).join('');
}

function getFilteredHistory() {
  const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
  const bankFilter = localStorage.getItem('selectedBank') || 'Другие';
  return history.filter(exp => exp.bank === bankFilter);
}

function getStartOfWeek() {
  const now = new Date();
  const day = now.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const start = new Date(now);
  start.setDate(now.getDate() + diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

function calculateWeeklyExpenses() {
  const filteredHistory = getFilteredHistory();
  const startOfWeek = getStartOfWeek();
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  let weeklyTotal = 0;

  filteredHistory.forEach(exp => {
    const updateDate = new Date(exp.dateISO);
    const category = categories.find(cat => cat.name === exp.category);
    if (updateDate >= startOfWeek && category && category.limitEnabled) {
      weeklyTotal += exp.amount;
    }
  });

  localStorage.setItem('weeklyTotal', weeklyTotal.toString());
  const weeklyElem = document.getElementById('weeklyExpenses');
  if (weeklyElem) {
    weeklyElem.textContent = `Еженедельные расходы: ${weeklyTotal.toFixed(2)} ₽`;
  }
}

function renderStats() {
  const statsCategories = document.getElementById('statsCategories');
  const totalsContainer = document.getElementById('totalsContainer');
  if (!statsCategories || !totalsContainer) return;
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const history = JSON.parse(localStorage.getItem('expenseHistory')) || [];
  const bankFilter = localStorage.getItem('selectedBank') || 'Другие';
  const filteredHistory = history.filter(exp => exp.bank === bankFilter);

  statsCategories.innerHTML = '';
  const categoryTotals = {};
  categories.forEach(cat => {
    categoryTotals[cat.name] = 0;
  });
  filteredHistory.forEach(exp => {
    if (categoryTotals.hasOwnProperty(exp.category)) {
      categoryTotals[exp.category] += exp.amount;
    }
  });
  categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'stat-item';
    div.innerHTML = `
      ${cat.name}: ${categoryTotals[cat.name].toFixed(2)} ₽
      <button onclick="showHistory(this, '${cat.name}')">История</button>
    `;
    statsCategories.appendChild(div);
  });

  let totalExpenses = 0;
  filteredHistory.forEach(exp => {
    totalExpenses += exp.amount;
  });
  totalsContainer.innerHTML = `
    <h3>Итого</h3>
    <p>Общие расходы: ${totalExpenses.toFixed(2)} ₽</p>
    <p>Еженедельные расходы: ${(parseFloat(localStorage.getItem('weeklyTotal')) || 0).toFixed(2)} ₽</p>
  `;

  if (chartInstance) {
    chartInstance.destroy();
  }
  const ctx = document.getElementById('statsChart').getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: categories.map(cat => cat.name),
      datasets: [{
        data: categories.map(cat => categoryTotals[cat.name] || 0),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
}

function renderSettings() {
  const settingsSubmenu = document.getElementById('settingsSubmenu');
  const settingsCategories = document.getElementById('settingsCategories');
  if (!settingsSubmenu || !settingsCategories) return;
  settingsSubmenu.style.display = 'block';
  settingsCategories.innerHTML = '';
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  categories.forEach((cat, index) => {
    const div = document.createElement('div');
    div.className = 'settings-row';
    div.innerHTML = `
      <span class="name">${cat.name}</span>
      <span class="limit-badge ${cat.limitEnabled ? 'active' : ''}" onclick="editLimit(this, ${index})">${cat.limit ? cat.limit.toFixed(2) : '0.00'} ₽</span>
      <label class="switch">
        <input type="checkbox" ${cat.limitEnabled ? 'checked' : ''} onchange="toggleLimit(this, ${index})">
        <span class="slider"></span>
      </label>
    `;
    settingsCategories.appendChild(div);
  });
}

function editLimit(badge, index) {
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const currentLimit = categories[index].limit || 0;
  const newLimit = prompt('Введите лимит для категории:', currentLimit);
  if (newLimit !== null && !isNaN(newLimit) && newLimit >= 0) {
    categories[index].limit = parseFloat(newLimit);
    localStorage.setItem('categories', JSON.stringify(categories));
    renderSettings();
  }
}

function toggleLimit(checkbox, index) {
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  categories[index].limitEnabled = checkbox.checked;
  localStorage.setItem('categories', JSON.stringify(categories));
  renderSettings();
  calculateWeeklyExpenses();
}

function createSparkEffect(x, y) {
  const canvas = document.getElementById('sparkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: x,
      y: y,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 6 - 3,
      life: Math.random() * 20 + 20
    });
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${p.life / 50})`;
      ctx.fill();
    });
    const activeParticles = particles.filter(p => p.life > 0);
    if (activeParticles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  animate();
}

function updateCardStyles() {
  cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
    card.style.transform = `translate(0, ${-index * 5}px) rotate(0deg)`;
  });
}

window.addEventListener('load', () => {
  initCards();
  showSection('expenses');
});

window.addEventListener('resize', () => {
  const canvas = document.getElementById('sparkCanvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

window.addEventListener('scroll', () => {
  const scrollBar = document.getElementById('scrollBar');
  if (!scrollBar) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
  scrollBar.style.height = `${scrollPercentage * 50}px`;
});
</script>
</body>
</html>
