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
 bottom: 40px; /* Поднято с 20px на 40px */
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
#statsCategories

System: You are Grok 3 built by xAI.

The issue with the weekly expenses calculation not accounting for the `limitEnabled` toggle in the provided code can be fixed by modifying the `calculateWeeklyExpenses` function. The function should only sum expenses from categories where `limitEnabled` is `true`. Below, I’ve updated the code to address this issue while preserving all other functionality. The complete corrected code is provided, which you can download as an HTML file.

### Key Changes
1. **Modified `calculateWeeklyExpenses` Function**:
   - Added logic to check if a category has `limitEnabled: true` before including its expenses in the weekly total.
   - Used the `categories` array to verify the `limitEnabled` status for each expense’s category.
2. **Maintained All Functionality**:
   - Ensured all other features (category management, history, charts, bank cards, etc.) remain intact.
   - Kept the existing structure and logic of the application.

### Corrected Code
Below is the full corrected HTML code. You can copy it into a file (e.g., `index.html`) and use it directly.

```html
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
 box-shadow: 0 6px 20px rgba(0,0,0,0 acheté

System: I understand you want the weekly expenses calculation to only include categories where the toggle (`limitEnabled`) is enabled in the settings menu. Below is the complete, corrected HTML code with the modified `calculateWeeklyExpenses` function to achieve this. The function now filters expenses based on categories with `limitEnabled: true`. All other functionality (e.g., category management, history, charts, bank cards, etc.) remains intact.

### Key Changes
1. **Modified `calculateWeeklyExpenses` Function**:
   - Added logic to check if a category has `limitEnabled: true` before including its expenses in the weekly total.
   - Retrieved the `categories` array from `localStorage` to verify the `limitEnabled` status for each expense's category.
   - Ensured the weekly total is updated and displayed correctly.
2. **Preserved All Functionality**:
   - Kept all other features and logic unchanged to maintain the full functionality of the application.
3. **Code Organization**:
   - Provided the complete code, ready to be saved as an HTML file (e.g., `index.html`) and used directly.

### Corrected Code
Below is the full corrected code. You can copy it into a file named `index.html` and open it in a browser to use the application. The code includes all necessary HTML, CSS, and JavaScript, with the fix applied to the weekly expenses calculation.

```html
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
 <p></p>
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
 <h3>Итого расходо

System: The issue with the weekly expenses calculation is that it currently sums all expenses within the week, regardless of whether the category's `limitEnabled` toggle is enabled in the settings. To fix this, the `calculateWeeklyExpenses` function needs to filter expenses based on categories where `limitEnabled` is `true`. Below is the complete, corrected HTML code with the modified function, preserving all other functionality of the application.

### Key Changes
1. **Modified `calculateWeeklyExpenses` Function**:
   - Added logic to retrieve the `categories` array from `localStorage` and check if each expense's category has `limitEnabled: true`.
   - Only expenses from enabled categories are included in the weekly total.
   - Updated the weekly total display to reflect the filtered sum.
2. **Preserved All Functionality**:
   - Ensured all other features (e.g., category management, history, charts, bank cards, etc.) remain unchanged and fully functional.
3. **Code Organization**:
   - Provided the complete code, ready to be saved as an HTML file (e.g., `index.html`) for immediate use.

### Corrected Code
Below is the full corrected code. You can copy it into a file named `index.html` and open it in a browser to use the application. The code includes all HTML, CSS, and JavaScript, with the fix applied to the weekly expenses calculation.

```html
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
 border-radius:  Baylor
 12px;
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
 margin-bottom
