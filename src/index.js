const EventBusFactory = () => {
    const listeners = {};

    const fire = (event, payload) => {
        // publish an event listener
        return listeners[event].map(callback => callback(payload));
    };

    const listen = (event, listener) => {
        // create an event listener
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(listener);
    };

    const unsubscribe = (event, removeListener) => {
        // unsubscribe a listener from event
        listeners[event] = listeners[event].filter((listener) => listener !== removeListener);
    };

    return {
        fire,
        listen,
        unsubscribe
    }
}


module.exports = EventBusFactory
