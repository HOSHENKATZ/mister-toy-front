import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { loadReviews, removeReview } from '../../store/actions/review.actions.js'

import { ReviewEdit } from '../cmps/ReviewEdit'
import { ReviewList } from '../cmps/ReviewList'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { toyService } from '../services/toy.service.js'

export function ReviewIndex() {
  const user = useSelector(storeState => storeState.userModule.loggedInUser)
  const reviews = useSelector(storeState => storeState.reviewModule.reviews)

  const [toys, setToys] = useState([])

  useEffect(() => {
    loadReviews()
    loadToys()
  }, [])

  async function loadToys() {
    try {
      const { toys } = await toyService.query({ isReviews: true })
      setToys(toys)
    } catch (error) {
      console.log('error:', error)
    }
  }

  async function onRemoveReview(reviewId) {
    try {
      await removeReview(reviewId)
      showSuccessMsg('Review removed')
    } catch (err) {
      showErrorMsg('Cannot remove')
    }
  }

  return (
    <div className="review-index">
      <h2>Reviews and Gossip</h2>
      {user && <ReviewEdit toys={toys} />}
      {!!reviews.length && (
        <ReviewList reviews={reviews} onRemoveReview={onRemoveReview} />
      )}
    </div>
  )
}


