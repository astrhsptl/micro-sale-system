export function render(elementId: string, htmlElement: string): void {
    document.querySelector<HTMLElement>(`#${elementId}`)!.innerHTML = htmlElement;
}

export function insertableRender(htmlCode: string): string {
    return htmlCode;
}