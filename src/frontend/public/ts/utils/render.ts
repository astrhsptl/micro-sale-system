export function render(htmlCode: string, mountPoint: HTMLElement | null): void | null {
    mountPoint!.innerHTML = htmlCode;
}