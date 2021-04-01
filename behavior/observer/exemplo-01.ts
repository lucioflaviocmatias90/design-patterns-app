/**
 * Observer Pattern
 * 
 * Define uma dependência um para muitos entre objetos,
 * de modo que, quando um objeto muda de estado, todos os
 * seus dependentes são automaticamente nofitificados e 
 * atualizados
 */

interface Observer {
    update: (...args: unknown[]) => void;
}

interface Observable {
    observers: Observer[];
    subscribe: (...observer: Observer[]) => void;
    unsubscribe: (observer: Observer) => void;
    publish: () => void;
}

class InputObservable implements Observable {
    private observers: Observer[] = [];

    subscribe(...observers: Observer[]) {
        observers.forEach(observer => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer)
            }
        });
    }

    unsubscribe(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    publish() {
        this.observers.forEach(observer => observer.update());
    }
}