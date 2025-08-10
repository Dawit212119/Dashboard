import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 250,
      status: "success",
      email: "john@example.com",
    },
    {
      id: "3a7b8c91",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "5d2e4f6a",
      amount: 500,
      status: "pending",
      email: "david@example.com",
    },
    {
      id: "9e1f7a3b",
      amount: 150,
      status: "success",
      email: "lisa@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 250,
      status: "success",
      email: "john@example.com",
    },
    {
      id: "3a7b8c91",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "5d2e4f6a",
      amount: 500,
      status: "pending",
      email: "david@example.com",
    },
    {
      id: "9e1f7a3b",
      amount: 150,
      status: "success",
      email: "lisa@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 250,
      status: "success",
      email: "john@example.com",
    },
    {
      id: "3a7b8c91",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "5d2e4f6a",
      amount: 500,
      status: "pending",
      email: "david@example.com",
    },
    {
      id: "9e1f7a3b",
      amount: 150,
      status: "success",
      email: "lisa@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 250,
      status: "success",
      email: "john@example.com",
    },
    {
      id: "3a7b8c91",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "5d2e4f6a",
      amount: 500,
      status: "pending",
      email: "david@example.com",
    },
    {
      id: "9e1f7a3b",
      amount: 150,
      status: "success",
      email: "lisa@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 250,
      status: "success",
      email: "john@example.com",
    },
    {
      id: "3a7b8c91",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "5d2e4f6a",
      amount: 500,
      status: "pending",
      email: "david@example.com",
    },
    {
      id: "9e1f7a3b",
      amount: 150,
      status: "success",
      email: "lisa@example.com",
    },
    {
      id: "2c8d5e1f",
      amount: 300,
      status: "refunded",
      email: "mike@example.com",
    },
    {
      id: "6b4a3c2d",
      amount: 200,
      status: "pending",
      email: "anna@example.com",
    },
    {
      id: "1e9f8d7c",
      amount: 50,
      status: "failed",
      email: "tom@example.com",
    },
    {
      id: "4f6e2d1a",
      amount: 400,
      status: "success",
      email: "emily@example.com",
    },
    {
      id: "8c5d3b2a",
      amount: 175,
      status: "pending",
      email: "ryan@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
