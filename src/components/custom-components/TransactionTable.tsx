import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserIcon from "@/assets/user.svg";
import Image from "next/image";
import BellIcon from "@/assets/bell.svg";
import { Badge } from "@/components/ui/badge";

const TransactionTable = () => {
  return (
    <div>
      <Card className="card border-none">
        <CardHeader className="p-0 ">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Transactions</CardTitle>
            <div>
              <div className=" rounded-lg h-[33px] flex bg-[#282C35] p-2">
                <input
                  type="text"
                  className="bg-transparent  focus:outline-none border-none"
                />
                <Image src={BellIcon} width={25} height={25} alt="smsIcon" />
              </div>
            </div>
            <CardDescription className="flex items-center gap-4">
              <Image src={BellIcon} width={25} height={25} alt="smsIcon" />{" "}
              27-11-2024
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="card">
              <TableRow className="w-full ">
                <TableHead className="max-w-[200px]">Name</TableHead>
                <TableHead className="max-w-[100px]">Date</TableHead>
                <TableHead className="max-w-[100px]">Amount</TableHead>
                <TableHead className="max-w-[100px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="max-w-[200px]  flex items-center gap-2">
                  <Image src={UserIcon} width={50} height={50} alt="smsIcon" />
                  <h1>John Deo</h1>
                </TableCell>
                <TableCell className="max-w-[100px]">Sat,20 Apr 2020</TableCell>
                <TableCell className="max-w-[100px] text-green-500 font-semibold">
                  $26,335
                </TableCell>
                <TableCell className="max-w-[100px]">
                  <Badge className="bg-green-600 text-gray-700">
                    completed
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TransactionTable;
