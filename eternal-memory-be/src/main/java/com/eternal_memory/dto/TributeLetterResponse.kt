package com.eternal_memory.dto

import com.eternal_memory.entity.TributeLetter
import java.time.LocalDateTime

@JvmRecord
data class TributeLetterResponse(
    val name: String,
    val content: String,
    val createdAt: LocalDateTime
) {
    constructor(tributeLetter: TributeLetter?) : this(
        name = tributeLetter?.name ?: "Unknown",
        content = tributeLetter?.content ?: "불러올 수 없는 내용입니다.",
        createdAt = tributeLetter?.createdAt ?: LocalDateTime.now()
    )
}
