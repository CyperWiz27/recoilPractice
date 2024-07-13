import {atom, selector} from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 123

})

export const jobAtom =atom({
    key: "jobAtom",
    default: 23

})

export const messageAtom =atom({
    key: "messageAtom",
    default: 34

})

export const notificationAtom =atom({
    key: "notificationAtom",
    default: 79

})

export const totalNotificationSelector = selector({ 
    key: 'totalNotification', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const networkCount = get(networkAtom);
      const jobCount = get(jobAtom);
      const messageCount = get(messageAtom);
      const notificationCount = get(notificationAtom);
  
      return networkCount + notificationCount + messageCount + jobCount;
    },
  });