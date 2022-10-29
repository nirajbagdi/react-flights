export type FlightFields = {
    id: number;
    label: string;
    placeholder: string;
    defaultValue: string;
    children: React.ReactNode;
};

export type Airport = {
    id: number;
    name: string;
    country: string;
    code: string;
    city: string;
};
