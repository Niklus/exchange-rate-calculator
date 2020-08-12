// Network Origin and Pathname
const origin = window.location.origin;
const pathname = window.location.pathname;

// Check for internet connection on index page
if(pathname === '/' || pathname === '/index.html') {

  const url = `${origin}/offline.html`;

  // If offline then navigate to offline page
  if(!window.navigator.onLine){ 
    window.location.assign(url);
  }
  
  // Add event listener to navigate to offline page when no network detected
  window.addEventListener('offline', () => {
    window.location.assign(url);
  });
} 

// Check for internet connection on offline page
if(pathname === '/offline.html') {

  const url = `${origin}/`;

  // If online then navigate to index page
  if(window.navigator.onLine){ 
    window.location.assign(url);
  }

  // Add event listener to navigate to index page when network detected
  window.addEventListener('online', () => {
    window.location.assign(url);
  })
}

