import { calculateInvestmentResults, formatter } from "../src/util/investment";

export default function Result({ resultInput }) {
  const resultOutput = calculateInvestmentResults(resultInput);
  const initialInvestment =
    resultOutput[0].valueEndOfYear -
    resultOutput[0].interest -
    resultOutput[0].annualInvestment;

  console.log(resultOutput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultOutput.map((data, index) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year;
          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
