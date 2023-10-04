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
					<TableRow className="table-row">
						<TableCell className="table-cell purple-bottom-border" rowSpan={2}>
							#
						</TableCell>
						<TableCell
							className="table-cell purple-left-border purple-bottom-border sender"
							colSpan={3}
						>
							Sender
						</TableCell>
						<TableCell
							className="table-cell red-left-border red-bottom-border receiver"
							colSpan={3}
						>
							Receiver
						</TableCell>
					</TableRow>
					<TableRow className="table-row">
						<TableCell className="table-cell purple-left-border purple-bottom-border sender">
							Amount
						</TableCell>
						<TableCell className="table-cell purple-bottom-border sender">
							Currency
						</TableCell>
						<TableCell className="table-cell purple-bottom-border sender">
							Account number
						</TableCell>
						<TableCell className="table-cell red-left-border red-bottom-border receiver">
							Amount
						</TableCell>
						<TableCell className="table-cell red-bottom-border receiver">
							Currency
						</TableCell>
						<TableCell className="table-cell red-bottom-border receiver">
							Account number
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dummyData.map((data, i) => (
						<TableRow key={i} className="table-row table-body-row">
							<TableCell className="table-cell">{i + 1}</TableCell>
							<TableCell className="table-cell sender">
								{data.sender.amount}
							</TableCell>
							<TableCell className="table-cell sender">
								{data.sender.currency}
							</TableCell>
							<TableCell className="table-cell sender">
								{data.sender.accountNumber}
							</TableCell>
							<TableCell className="table-cell receiver">
								{data.receiver.amount}
							</TableCell>
							<TableCell className="table-cell receiver">
								{data.receiver.currency}
							</TableCell>
							<TableCell className="table-cell receiver">
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
