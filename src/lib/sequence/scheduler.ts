type Task = (time: number) => void;

class Scheduler {
  private tasks = new Set<Task>();
  private frameId: number | null = null;
  private isSuspended = false;

  constructor() {
    if (typeof window !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.suspend();
        } else {
          this.resume();
        }
      });
    }
  }

  private loop = (time: number) => {
    if (this.isSuspended) {
      this.frameId = null;
      return;
    }

    for (const task of this.tasks) {
      task(time);
    }

    this.frameId = requestAnimationFrame(this.loop);
  };

  public addTask(task: Task) {
    this.tasks.add(task);
    if (!this.frameId && !this.isSuspended) {
      this.frameId = requestAnimationFrame(this.loop);
    }
  }

  public removeTask(task: Task) {
    this.tasks.delete(task);
    if (this.tasks.size === 0 && this.frameId) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  public suspend() {
    this.isSuspended = true;
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  public resume() {
    this.isSuspended = false;
    if (this.tasks.size > 0 && !this.frameId) {
      this.frameId = requestAnimationFrame(this.loop);
    }
  }
}

export const globalScheduler = new Scheduler();
