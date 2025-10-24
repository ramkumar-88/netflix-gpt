import GptSearhBar from "./GptSearchBar"
import GptMovieSuggestions from "./GptMovieSuggestions"
import { BG_URL } from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt=""/>
      </div>
        <GptSearhBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch