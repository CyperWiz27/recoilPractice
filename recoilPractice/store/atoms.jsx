import {atom, selector} from "recoil";
import axios from  "axios";

export const networkCount =atom ({
    key: "networkCount",
    default: selector({
        key: "networkCallSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
        // network:34,
        // job: 45,
        // message:56,
        // notification: 67
    })
});



export const total= selector({
    key: "total",
    get: ({get}) => {
        const domains = get(networkCount);

        return domains.network+domains.notifications+domains.messaging+domains.jobs;
    }
})

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