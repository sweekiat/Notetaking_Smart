
import { Button, Label,Select ,TextInput} from "flowbite-react"
import { redirect } from "next/dist/server/api-utils";

export default function EventSelector(){
    const blockchains = [{name:"Ethereum",value:"ETHEREUM"},{name:"Polygon",value:"POLYGON"}]
    function submitForm(){

        return redirect("/")
    }
    return (
      <form className="flex flex-col gap-4">
        <div className="max-w-md " id="select">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select Blockchain" />
          </div>
          <Select id="blockchains" required>
            {blockchains.map((blockchain) => (
              <option value={blockchain.value}>{blockchain.name}</option>
            ))}
          </Select>
        </div>
        <div className="max-w-md ">
          <div className="mb-2 block">
            <Label htmlFor="cryptoAddress" value="Address" />
          </div>
          <TextInput
            id="cryptoAddress"
            placeholder="Enter the address youre looking for"
            type="text"
          />
        </div>
        <div className="max-w-md ">
          <div className="mb-2 block">
            <Label htmlFor="searchName" value="Seach Name" />
          </div>
          <TextInput
            id="searchName"
            placeholder="Give your search a label"
            type="text"
          />
        </div>
        <div>
          <Button>Search Data</Button>
        </div>
      </form>
    );
}