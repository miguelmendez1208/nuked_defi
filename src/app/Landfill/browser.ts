declare const window: any;
const DEBUG_MODE = false;

export function saveTheme(theme: string) {
  localStorage.setItem('theme', theme);
}

export function retrieveTheme() {
  return localStorage.getItem('theme');
}

export function saveHamburgerMenuPosition(position: string) {
  localStorage.setItem('hamburgerMenuPosition', position);
}

export function retrieveHamburgerMenuPosition() {
  return localStorage.getItem('hamburgerMenuPosition');
}

export function saveAutoBrowserWallet(position: boolean) {
  localStorage.setItem('autoBrowserWallet', position.toString());
}

export function retrieveAutoBrowserWallet() {
  return localStorage.getItem('autoBrowserWallet');
}

export function retrieveTermsAgreedTimestamp() {
  return localStorage.getItem('termsAgreedTimestamp');
}
