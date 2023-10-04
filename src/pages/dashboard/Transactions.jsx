import {
	Grid,
	Table,
	Typography,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";

const dummyData = [
	{
		sender: { amount: 50, currency: "INR", accountNumber: 324324 },
		receiver: { amount: 20, currency: "USD", accountNumber: 9587598 },
	},
	{
		sender: { amount: 50, currency: "INR", accountNumber: 324324 },
		receiver: { amount: 20, currency: "USD", accountNumber: 9587598 },
	},
	{
		sender: { amount: 50, currency: "INR", accountNumber: 324324 },
		receiver: { amount: 20, currency: "USD", accountNumber: 9587598 },
	},
	{
		sender: { amount: 50, currency: "INR", accountNumber: 324324 },
		receiver: { amount: 20, currency: "USD", accountNumber: 9587598 },
	},
	{
		sender: { amount: 50, currency: "INR", accountNumber: 324324 },
		receiver: { amount: 20, currency: "USD", accountNumber: 9587598 },
	},
];

function TransactionsTable() {
	return (
		<TableContainer className="table-container">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className="table-cell" rowSpan={2}>
							#
						</TableCell>
						<TableCell className="table-cell" colSpan={3}>
							Sender
						</TableCell>
						<TableCell className="table-cell" colSpan={3}>
							Receiver
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="table-cell">Amount</TableCell>
						<TableCell className="table-cell">Currency</TableCell>
						<TableCell className="table-cell">Account number</TableCell>
						<TableCell className="table-cell">Amount</TableCell>
						<TableCell className="table-cell">Currency</TableCell>
						<TableCell className="table-cell">Account number</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dummyData.map((data, i) => (
						<TableRow key={i}>
							<TableCell className="table-cell">{i + 1}</TableCell>
							<TableCell className="table-cell">{data.sender.amount}</TableCell>
							<TableCell className="table-cell">
								{data.sender.currency}
							</TableCell>
							<TableCell className="table-cell">
								{data.sender.accountNumber}
							</TableCell>
							<TableCell className="table-cell">
								{data.receiver.amount}
							</TableCell>
							<TableCell className="table-cell">
								{data.receiver.currency}
							</TableCell>
							<TableCell className="table-cell">
								{data.receiver.accountNumber}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default function Transactions() {
	return (
		<Grid container paddingLeft="24px" paddingRight={14} width="100%">
			<Grid item>
				<Typography variant="h3" fontWeight={600}>
					Transactions
				</Typography>
				<Typography variant="h6" fontWeight={400}>
					All transactions that you have made appear here.
				</Typography>
			</Grid>
			<Grid item width="100%">
				<TransactionsTable />
			</Grid>
		</Grid>
	);
}
