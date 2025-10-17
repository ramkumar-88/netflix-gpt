import GptSearhBar from "./GptSearchBar"
import GptMovieSuggestions from "./GptMovieSuggestions"
import { BG_URL } from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt=""/>
      </div>
        <GptSearhBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch