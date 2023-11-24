/// <reference lib="webworker" />

 addEventListener('message', ({ data }) => {
  console.log('Received from Main Thread', data);
  });
