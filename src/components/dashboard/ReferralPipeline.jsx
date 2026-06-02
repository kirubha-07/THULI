import { referralPipeline } from '../../data/mockData'

export default function ReferralPipeline() {
  return (
    <div className="rounded-xl border border-sage/20 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-forest-950">Referral Pipeline</h2>
      <div className="mt-4 flex items-stretch">
        {referralPipeline.map((stage, index) => (
          <div key={stage.stage} className="flex flex-1 items-stretch">
            <div className={`flex-1 rounded-xl border border-sage/20 px-3 py-3 text-center ${index % 2 === 0 ? 'bg-mint-100' : 'bg-white'}`}>
              <div className="text-2xl font-bold text-forest-950">{stage.count}</div>
              <div className="mt-1 text-xs text-forest-700">{stage.stage}</div>
            </div>
            {index < referralPipeline.length - 1 ? <div className="mx-2 self-center text-lg text-sage">→</div> : null}
          </div>
        ))}
      </div>
    </div>
  )
}