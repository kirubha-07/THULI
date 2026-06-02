import { AlertTriangle } from 'lucide-react'
import { emotionHistory } from '../../data/mockData'

const emotionMap = {
  happy: { emoji: '😊', wrapper: 'bg-green-50 border-green-200' },
  sad: { emoji: '😢', wrapper: 'bg-blue-50 border-blue-200' },
  angry: { emoji: '😠', wrapper: 'bg-orange-50 border-orange-200' },
  scared: { emoji: '😨', wrapper: 'bg-red-50 border-red-200' },
}

const recentObservations = [
  {
    time: 'Today, 9:40 AM',
    text: 'Child hesitated to join circle time after arrival',
    domain: 'Social-Emotional',
  },
  {
    time: 'Yesterday, 4:10 PM',
    text: 'Needed repeated prompting to complete spoon-feeding',
    domain: 'Self-Care',
  },
  {
    time: 'Yesterday, 11:30 AM',
    text: 'Recognised three pictures correctly during naming game',
    domain: 'Language',
  },
]

export default function EmotionHistory({ child }) {
  const distressDays = emotionHistory.filter((entry) => entry.emotion === 'sad' || entry.emotion === 'scared').length
  const showAlert = distressDays >= 3 && child.risk !== 'green'

  return (
    <div className="rounded-lg sm:rounded-xl border border-sage/20 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
      <div className="text-xs sm:text-sm font-semibold text-forest-950">Emotion Check-ins</div>
      <div className="text-xs text-forest-700">Last 7 days</div>

      {showAlert ? (
        <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2 rounded-lg border border-alert-red/20 bg-red-50 p-1.5 sm:p-2 text-xs text-alert-red">
          <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-xs">{child.name} distress: {distressDays} days</span>
        </div>
      ) : null}

      <div className="mt-2 sm:mt-3 flex items-end justify-between gap-1 sm:gap-2">
        {emotionHistory.map((entry) => {
          const config = emotionMap[entry.emotion]
          return (
            <div key={entry.day} className="flex flex-1 flex-col items-center gap-0.5 sm:gap-1 text-center">
              <div className="text-[9px] sm:text-[10px] text-forest-700">{entry.day}</div>
              <div className={`flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border text-sm sm:text-base ${config.wrapper}`}>{config.emoji}</div>
            </div>
          )
        })}
      </div>

      <div className="mt-3 sm:mt-4 border-t border-sage/10 pt-3 sm:pt-4">
        <div className="text-xs sm:text-sm font-semibold text-forest-950">Recent</div>
        <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
          {recentObservations.map((observation) => (
            <div key={observation.time} className="rounded-lg border border-sage/10 bg-mint-50 p-2 sm:p-3">
              <div className="text-xs text-forest-700">{observation.time}</div>
              <div className="mt-0.5 text-xs italic text-forest-950">{observation.text}</div>
              <div className="mt-1.5 sm:mt-2 inline-flex rounded-full bg-mint-100 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] text-forest-700">{observation.domain}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
          <button type="button" className="w-full rounded-lg bg-forest-700 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-forest-800">
            Report
          </button>
          <button type="button" className="w-full rounded-lg border border-alert-red py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-alert-red hover:bg-red-50">
            Flag Review
          </button>
          <button type="button" className="w-full rounded-lg bg-mint-100 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-forest-700 hover:bg-sage/30">
            Add Note
          </button>
        </div>
      </div>
    </div>
  )
}