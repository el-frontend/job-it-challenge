import { Component, computed, effect, inject, Signal, signal, WritableSignal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Calculator } from "./calculator";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    });
    
  }
  title = signal("angular19");
  badges = signal([
    {
      id: 1,
      name: "Angular",
    },
    {
      id: 2,
      name: "Signal",
    },
  ]);

  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  changeName = () => {
    this.title.set("Angular With Signal");
  };

  increment = () => {
    this.count.set(this.count() + 1);
  };
}
