import arrow from "../assets/images/icon-arrow.svg"

export default function SearchBar( { onSearch } ) { 

  const handlesubmit = (e) => {
    e.preventDefault()

    const input = e.target.querySelector('input') 


    const isValidIPv4 = (ip) => {
      const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/
      const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1)$/
      return ipv4Regex.test(ip) || ipv6Regex.test(ip)
    }

    if (!isValidIPv4(input.value.trim())) { 
      alert("Please enter a valid IPv4 address.")
      return
    }

    const ip = input.value.trim()

    if (ip) {
      onSearch(ip)
      input.value = "" 
    }
  }

  return (
    <form 
      className="pointer-events-auto w-full flex justify-center items-center"
      onSubmit={ handlesubmit }
    >
      <input
        type="text"
        placeholder="Search for an IP address..."
        className="p-4 w-full sm:w-3/4 sm:max-w-96 h-12 md:h-14 text-sm md:text-base text-gray-700 rounded-tl-xl rounded-bl-xl border-none focus:outline-none"
      />
      <button 
        className="h-12 md:h-14 py-4 px-5 rounded-tr-xl rounded-br-xl bg-black hover:cursor-pointer hover:bg-neutral-700"

        type="submit"
      >
        <img src={ arrow } alt="arrow button to run Search" width="11px" height="11px" />
      </button>
    </form>
  )
}