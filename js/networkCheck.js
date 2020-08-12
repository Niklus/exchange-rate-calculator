
// Check for internet connection on index page
if(window.location.pathname === '/') {

  // If offline then navigate to offline page
  if(!window.navigator.onLine){ 
    window.location = '/offline.html';
  }
  
  // Add event listener to navigate to offline page when no network detected
  window.addEventListener('offline', () => {
    window.location = '/offline.html';
  });
} 

// Check for internet connection on offline page
if(window.location.pathname === '/offline.html') {

  // If online then navigate to index page
  if(window.navigator.onLine){ 
    window.location = '/';
  }

  // Add event listener to navigate to index page when network detected
  window.addEventListener('online', () => {
    window.location = '/';
  })
} 

