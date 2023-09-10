
import { Label,Select } from "flowbite-react"

export default function EventSelector(){
    const blockchains = [{name:"Ethereum",value:"ETHEREUM"},{name:"Polygon",value:"POLYGON"}]
    return (
      <form>
        <div className="max-w-md" id="select">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select Blockchain" />
          </div>
          <Select id="blockchains" required>
            {blockchains.map((blockchain)=>(<option value={blockchain.value}>{blockchain.name}</option>))}
          </Select>
        </div>

      </form>
    );
}