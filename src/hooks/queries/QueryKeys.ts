// [Reference] https://yogjin.tistory.com/121

const PROMPT_KEYS = {
    all: ["prompts"] as const,

    lists: () => [...PROMPT_KEYS.all, "list"] as const, // ["prompts", "list"]
    list: (filters: object) => [...PROMPT_KEYS.lists(), { filters }] as const, // ["prompts", "list", "..."]

    details: () => [...PROMPT_KEYS.all, "detail"] as const, // ["prompts", "detail"]
    detail: (id: string) => [...PROMPT_KEYS.details(), id] as const, // ["prompts", "detail", "id"]
};

const PAYMENTS_KEYS = {
    all: ["payments"] as const,
};

const CARD_INFO_KEYS = {
    all: ["cardInfos"] as const,
};

export { PROMPT_KEYS, PAYMENTS_KEYS, CARD_INFO_KEYS };
