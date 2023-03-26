
<p align='center'>
<img src='https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/logo/logo.png' alt="logo" />
</p>

<h1 align='center'>nBarber - APP</h1>
<p align='center'>APP built with the React Native framework for a barber system.</p>
<p align="center">
	<a href="https://github.com/williamniemiec/nbarber-app/actions/workflows/windows.yml"><img src="https://github.com/williamniemiec/nbarber-app/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/williamniemiec/nbarber-app/actions/workflows/macos.yml"><img src="https://github.com/williamniemiec/nbarber-app/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/williamniemiec/nbarber-app/actions/workflows/ubuntu.yml"><img src="https://github.com/williamniemiec/nbarber-app/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
		<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native -0.71+-D0008F.svg" alt="React Native"></a>
	<a href="https://github.com/williamniemiec/nbarber-app/blob/master/LICENSE"><img src="https://img.shields.io/github/license/williamniemiec/nbarber-app" alt="License"></a>
	<a href="https://github.com/williamniemiec/nbarber-app/releases"><img src="https://img.shields.io/github/v/release/williamniemiec/nbarber-app" alt="Release"></a>
</p>

<div height=100 align='center'>
  <a href='https://play.google.com/store/apps/details?id=com.nbarber-app'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width=172 align='center' /></a>
  
</div>

<hr />

## ❇ Introduction
nBarber is an application for people to find nearby barbers and schedule haircuts. It is developed using React Native, which is a mobile development framework for generating mobile applications using component-oriented programming. It generates native applications for [Android](www.android.com) and [iOS](www.apple.com/ios) operating systems. The main objective was to develop a mobile application for learning purposes only, not for profit.

### Login information
| Email| Password |
|------- | ----- |
| user@email.com |1234|

### ⚠ Warning
The hosting service may have a certain delay (~ 2 min) for uploading the application so the loading of the website may have a certain delay. 

## ✔ Requirements

- [JDK 11+](https://www.oracle.com/java/technologies/downloads/);
- [NodeJS](https://nodejs.org/en/download/);
- [React Native CLI](https://reactnative.dev/docs/environment-setup).

## ℹ How to run

Type in your terminal:

1. npm install --legacy-peer-deps

#### Windows
2. npx react-native run-android OR npx react-native run-ios

#### Linux
2. npx react-native start
3. npx react-native run-android OR npx react-native run-ios


## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap">

<img height=400 src="https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/screens/home.png" alt="home screen" />

<img height=400 src="https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/screens/barber.png" alt="barber screen" />

<img height=400 src="https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/screens/barber-agenda.png" alt="barber agenda screen" />

<img height=400 src="https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/screens/favorites.png" alt="favorites screen" />

<img height=400 src="https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/screens/search.png" alt="search screen" />

<img height=400 src="https://raw.githubusercontent.com/williamniemiec/nbarber-app/main/docs/images/screens/appointmnents.png" alt="appointments screen" />
</div>


## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/williamniemiec/nbarber-app/releases).

## 🗺 Project structure
![architecture](https://raw.githubusercontent.com/williamniemiec/nbarber-app/master/docs/images/design/architecture.png)

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|\_\_tests\_\_|`Directory`|Test files|
|android|`Directory`|Android source files|
|docs |`Directory`|Documentation files|
|ios|`Directory`|iOS source files|
|src     |`Directory`| Source files|

### /src
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|assets|`Directory`|Application static files|
|components|`Directory`|Collection of user interface components (like buttons and inputs) that can be used across various files in the project|
|config|`Directory`|Environment variables and configuration related files|
|models / domain / dto|`Directory`|Data and database model files|
|navigators|`Directory`|Files responsible for defining application navigation routes|
|parts|`Directory`|User interface components used for composing components|
|providers|`Directory`|Files responsible for managing local data |
|services|`Directory`|Files responsible for business logic|
|screens|`Directory`|Files responsible for showing information to users according to some navigation route|
|App.tsx|`File`|Application point entry|

