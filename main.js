// Function to detect if the device is a mobile device
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Function to detect the operating system
function detectOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

// For Window ...

// Function to detect if the device is a desktop

// Function to detect the operating system
function detectOSForWindow() {
  const platform = navigator.platform.toLowerCase();

  if (platform.includes("win")) {
    console.log("Windows");
    return "Windows";
  } else if (platform.includes("mac")) {
    return "Mac OS";
  } else if (platform.includes("linux")) {
    return "Linux";
  } else {
    return "Unknown";
  }
}

// Example usage

/////

// for mobile
const app = detectOS();
//
const appWind = detectOSForWindow();

// Example usage
if (isMobileDevice()) {
  document.body.innerHTML = `${
    app === "iOS"
      ? `
      ${window.location.assign(
        "https://apps.apple.com/eg/app/ithraa/id6471949412"
      )}
     
      `
      : app === "Android"
      ? ` ${window.location.assign(
          "https://play.google.com/store/apps/details?id=io.ithraa.ithraa_app&pli=1"
        )}
       `
      : `<div class="h-screen">
        <div class="w-full container mx-auto p-6">
          <div class="w-full flex justify-between">
          <a href="https://ithraa.io/">
            <img src="./img/ithraa_logo.svg" class="w-20 inline" />
          </a>
          </div>
        </div>

        <div class="w-full container px-6 flex md:justify-between flex-wrap flex-col md:flex-row">
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="mt-4 mb-8 text-3xl md:text-4xl text-purple-800 font-bold leading-tight text-center md:text-right slide-in-bottom-h1">
              تطبيقات منصة إثراء متاحة الآن على الأنظمة التالية
            </h1>

            <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center fade-in">
              تحميل تطبيقنا
            </p>
            <div class="flex w-full justify-center md:justify-start gap-x-5 pb-24 lg:pb-0 fade-in mt-2">
              <a
                href="https://apps.apple.com/eg/app/ithraa/id6471949412"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img
                  src="./img/app-store-google.svg"
                  class="h-12 pr-4 bounce-top-icons"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=io.ithraa.ithraa_app&pli=1"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img
                  src="./img/app-store-apple.svg"
                  class="h-12 bounce-top-icons"
                />
              </a>
            </div>
          </div>

          <div class="w-full xl:w-3/5 py-6 overflow-y-hidden text-left">
            <img
              class="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src="./img/1.jpg"
            />
          </div>
        </div>
      </div>
    `
  }`;
} else {
  document.body.innerHTML = `${
    appWind === "Mac OS"
      ? `
      ${window.location.assign(
        "https://apps.apple.com/eg/app/ithraa/id6471949412"
      )}
     
      `
      : `<div class="h-screen">
        <div class="w-full container p-6">
          <div class="w-full">
            <a href="https://ithraa.io/"  target="_blank">
            <img src="./img/ithraa_logo.svg" class="w-20 inline" />
          </a>
          </div>
        </div>

        <div class="w-full container px-6 flex md:justify-between flex-wrap flex-col md:flex-row">
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="mt-4 mb-8 text-3xl md:text-4xl text-purple-800 font-bold leading-tight text-center md:text-right slide-in-bottom-h1">
              تطبيقات منصة إثراء متاحة الآن على الأنظمة التالية
            </h1>

            <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center fade-in">
              تحميل تطبيقنا
            </p>
            <div class="flex w-full justify-center md:justify-start gap-x-5 pb-24 lg:pb-0 fade-in mt-2">
              <a
                href="https://apps.apple.com/eg/app/ithraa/id6471949412"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img
                  src="./img/app-store-google.svg"
                  class="h-12 bounce-top-icons"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=io.ithraa.ithraa_app&pli=1"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img
                  src="./img/app-store-apple.svg"
                  class="h-12 bounce-top-icons"
                />
              </a>
            </div>
          </div>

          <div class="w-full xl:w-3/5 py-6 overflow-y-hidden text-left">
            <img
              class="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src="./img/1.jpg"
            />
          </div>
        </div>
      </div>
    `
  }`;
}
