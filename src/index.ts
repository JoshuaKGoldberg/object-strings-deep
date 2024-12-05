export function getObjectStringsDeep(value: unknown): string[] {
	return Array.from(new Set(getObjectStringsDeepWorker(value)));
}

function getObjectStringsDeepWorker(value: unknown): string[] {
	if (Array.isArray(value)) {
		return value.flatMap(getObjectStringsDeep);
	}

	switch (typeof value) {
		case "object":
			return value ? Object.entries(value).flatMap(getObjectStringsDeep) : [];

		case "string":
			return [value];
	}

	return [];
}
