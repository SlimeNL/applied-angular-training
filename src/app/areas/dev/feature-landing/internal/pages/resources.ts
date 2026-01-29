import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'ht-home-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `
    <app-ui-page title="Resources">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Websites Card -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"
                />
              </svg>
              Websites
            </h2>
            <div class="divider"></div>
            <div class="space-y-4">
              <div>
                <a
                  href="https://applied-angular.hypertheory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Hypertheory Angular Starter 2026 Documentation</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Note: This is going to move to a new site. Stay tuned!
                </p>
              </div>
              <div>
                <a
                  href="https://angular.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Angular Official Documentation</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  The official Angular documentation from the Angular team.
                </p>
              </div>
              <div>
                <a
                  href="https://blog.angular.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Angular Blog</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Official blog with announcements, deep dives, and new features.
                </p>
              </div>
              <div>
                <a
                  href="https://dev.to/this-is-angular"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >This is Angular</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Curated showcase of Angular projects and resources.
                </p>
              </div>
              <div>
                <a
                  href="https://www.angulararchitects.io/en/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Angular Architects</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  German company, specializing in Angular consulting and training.
                </p>
              </div>
              <div>
                <a
                  href="https://typescriptlang.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >TypeScript Documentation</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  The official TypeScript documentation.
                </p>
              </div>
              <div>
                <a
                  href="https://rxjs.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >RxJS Documentation</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Essential for mastering reactive programming in Angular.
                </p>
              </div>
              <div>
                <a
                  href="https://ngrx.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >NgRx</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Reactive state management for Angular applications.
                </p>
              </div>
              <div>
                <a
                  href="https://analogjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >AnalogJS</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Meta-framework for Angular with Vite support.
                </p>
              </div>
              <div>
                <a
                  href="https://angular.love"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Angular.love</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Community-curated collection of Angular resources.
                </p>
              </div>
              <div>
                <a
                  href="https://angular-challenges.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Angular Challenges</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Practice problems to improve your Angular skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- YouTube Channels Card -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"
                />
              </svg>
              YouTube Channels
            </h2>
            <div class="divider"></div>
            <div class="space-y-4">
              <div>
                <a
                  href="https://www.youtube.com/watch?v=M5dxX3Dhdf4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Rainer Hahnekamp - NGRX Stuff</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  This video and his whole channel is fantastic.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;Angular"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Angular (Official)</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Official Angular team updates and talks.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;JoshuaMorony"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Joshua Morony</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  In-depth tutorials on modern Angular patterns, state management, and reactive
                  programming.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;DecodedFrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Decoded Frontend</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Advanced Angular concepts and architecture.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;Fireship"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Fireship</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Quick, high-quality overviews of Angular features and comparisons.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;DeborahKurata"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Deborah Kurata</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Excellent tutorials on Angular fundamentals and best practices.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;MonsterlessonsAcademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Monsterlessons Academy</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  Practical Angular tutorials and real-world examples.
                </p>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/&#64;BrandonRobertsDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link link-primary font-semibold"
                  >Brandon Roberts</a
                >
                <p class="text-base-content/70 text-sm mt-1">
                  NgRx maintainer with great content on state management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-ui-page>
  `,
  styles: ``,
})
export class ResourcesPage {}
