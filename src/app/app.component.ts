import { Component, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { orgLD } from 'src/organsation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  html: SafeHtml;
  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.html = this.getSafeHTML(orgLD);
    this.addScriptToHead(this.html);
  }
  getSafeHTML(jsonLD: { [key: string]: any }): SafeHtml {
    const json = jsonLD ? JSON.stringify(jsonLD, null, 2) : '';
    // escape / to prevent script tag in JSON
    const html = `<script type="application/ld+json">${json.replace(
      /<\/script>/g,
      '<\\/script>'
    )}</script>`;
    console.log('test json', json, html);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  private addScriptToHead(scriptHtml: SafeHtml) {
    const scriptElement = this.renderer.createElement('script');
    scriptElement.innerHTML = scriptHtml.toString();
    this.renderer.appendChild(document.head, scriptElement);
  }
}
