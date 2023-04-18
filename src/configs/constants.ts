export const INITIAL_PAGINATION = {
    totalItems: 1,
    itemCount: 1,
    itemsPerPage: 10,
    totalPages: 1,
    currentPage: 1,
};

export const TABLE_HEIGHT = 600;

export enum ClientIdEnum {
    ADMIN = 'ADMIN',
}

export enum HttpHeaderEnum {
    Role = 'role',
}

export const QUERY_PARAMS = {
    page: 1,
    limit: 10,
};

export enum UserShiftStatus {
    ACCEPT = 2,
    REJECT_BEFORE_WORKING = 3,
    CANCEL = 4,
    IN_PROGRESS = 6,
    WAITING_APPROVAL = 7,
    APPROVAL = 8,
    REJECT_AFTER_WORKING = 9,
    BREAK_TIME = 10,
    PENDING = 1,
    ALL = 'all',
}

export enum ShiftStatusEnum {
    NEW = 2,
    IN_PROGRESS = 3,
    COMPLETED = 4,
    CANCEL = 5,
}

export enum UserAcceptedShiftStatus {
    IN_PROGRESS = 1,
    WAITING_APPROVAL = 2,
    APPROVAL = 3,
    BREAK_TIME = 4,
    REJECT_AFTER_WORKING = 5,
}

export enum InvoiceStatusEnum {
    PAST_DUE = 1,
    OUTSTANDING = 2,
    PAID = 3,
}

export enum ESettings {
    PRIVACY_WORKER = 'privacy_worker',
    PRIVACY_OPERATOR = 'privacy_operator',
    TERM_CONDITION_WORKER = 'term_condition_worker',
    TERM_CONDITION_OPERATOR = 'term_condition_operator',
}

export const SHIFT_WORKER_LIST_OPTIONS = [
    {
        label: 'ALL',
        value: UserShiftStatus.ALL,
    },
    {
        label: 'PENDING',
        value: UserShiftStatus.PENDING,
    },
    {
        label: 'ACCEPTED',
        value: UserShiftStatus.ACCEPT,
    },
    {
        label: 'REJECT BEFORE WORKING',
        value: UserShiftStatus.REJECT_BEFORE_WORKING,
    },
    {
        label: 'IN PROGRESS',
        value: UserShiftStatus.IN_PROGRESS,
    },
    {
        label: 'WAITING CONFIRM',
        value: UserShiftStatus.WAITING_APPROVAL,
    },
    {
        label: 'COMPLETED',
        value: UserShiftStatus.APPROVAL,
    },
    {
        label: 'REJECT AFTER WORKING',
        value: UserShiftStatus.REJECT_AFTER_WORKING,
    },
    {
        label: 'CANCEL',
        value: UserShiftStatus.CANCEL,
    },
];

export const INVOICES_OPTIONS_STATUS = [
    {
        label: 'Out Standing',
        value: InvoiceStatusEnum.OUTSTANDING,
    },
    {
        label: 'Paid',
        value: InvoiceStatusEnum.PAID,
    },
    {
        label: 'Past Due',
        value: InvoiceStatusEnum.PAST_DUE,
    },
];

export const FILTER_DASH_BOARD_OPTIONS = [
    {
        label: 'Daily',
        value: 'daily',
    },
    {
        label: 'Weekly',
        value: 'weekly',
    },
    {
        label: 'Monthly',
        value: 'monthly',
    },
    {
        label: 'Yearly',
        value: 'yearly',
    },
];

export const BO_SHIFT_OPTION_STATUS = [
    {
        label: 'ALL',
        value: 'all',
    },
    {
        label: 'NEW',
        value: ShiftStatusEnum.NEW,
    },
    {
        label: 'INPROGRESS',
        value: ShiftStatusEnum.IN_PROGRESS,
    },
    {
        label: 'COMPLETE',
        value: ShiftStatusEnum.COMPLETED,
    },
    {
        label: 'CANCEL',
        value: ShiftStatusEnum.CANCEL,
    },
];
