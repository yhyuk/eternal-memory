package com.eternal_memory.service

import com.eternal_memory.dto.TributeLetterRequest
import com.eternal_memory.dto.TributeLetterResponse
import com.eternal_memory.entity.TributeLetter
import com.eternal_memory.repository.TributeLetterRepository
import jakarta.servlet.http.HttpServletRequest
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
class TributeService(
    private val tributeLetterRepository: TributeLetterRepository
) {

    val tributeLetter: List<TributeLetterResponse>
        get() = tributeLetterRepository.findAllByOrderByCreatedAtDesc()
            .map { TributeLetterResponse(it) }

    @Transactional
    fun createTributeLater(request: TributeLetterRequest, httpRequest: HttpServletRequest) {
        val tributeLetterEntity = TributeLetter(
            name = request.name,
            content = request.content,
            ipAddress = getClientIp(httpRequest),
            createdAt = LocalDateTime.now()
        )

        tributeLetterRepository.save(tributeLetterEntity)
    }

    private fun getClientIp(request: HttpServletRequest): String? {
        val ipAddress = request.getHeader("X-Forwarded-For")?.split(",")?.firstOrNull()?.trim()
        return if (ipAddress.isNullOrEmpty() || "unknown".equals(ipAddress, ignoreCase = true)) {
            request.remoteAddr
        } else {
            ipAddress
        }
    }

}
