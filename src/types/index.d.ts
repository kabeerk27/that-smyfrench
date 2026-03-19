interface Window {
  // Add any custom window properties here
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
