export default function() {
    return {
        messages: [{
                UserName: "Адизова Александра",
                MessageText: "Добрый день",
                TimeStamp: "12:40",
            },
            {
                UserName: "Белова Полина",
                MessageText: "Привет",
                TimeStamp: "12:43",
            },
            {
                UserName: "Адизова Александра",
                MessageText: "Как дела?",
                TimeStamp: "12:44",
            },
        ],
        // messages: [],
        userName: "Белова Полина",
        intervalCtx: null,
        lastMsgID: 0,
        messageText: "",
    }
}