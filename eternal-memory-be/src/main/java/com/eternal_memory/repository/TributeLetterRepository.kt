package com.eternal_memory.repository

import com.eternal_memory.entity.TributeLetter
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TributeLetterRepository : JpaRepository<TributeLetter, Long> {
    fun findAllByOrderByCreatedAtDesc(): List<TributeLetter>
}
