'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Check, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const companySizeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' },
]

const roleOptions = [
    { value: 'founder', label: 'Founder/CEO' },
    { value: 'sales', label: 'Sales Leader' },
    { value: 'marketing', label: 'Marketing Leader' },
    { value: 'operations', label: 'Operations' },
    { value: 'analyst', label: 'Data Analyst' },
    { value: 'other', label: 'Other' },
]

export function GetStartedForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        companySize: '',
        role: '',
        message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/neon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Failed to submit application')
            }

            setIsSuccess(true)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        // Clear error when user starts typing
        if (error) setError(null)
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"
            >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Application Submitted!</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Thank you for your interest in Cellstack. We'll review your application and get back to you within 24 hours.
                </p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-sm text-destructive">{error}</p>
                </div>
            )}
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName" required>
                        First Name
                    </Label>
                    <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" required>
                        Last Name
                    </Label>
                    <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email" required>
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                />
            </div>

            {/* Company */}
            <div className="space-y-2">
                <Label htmlFor="company" required>
                    Company
                </Label>
                <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                />
            </div>

            {/* Company Size */}
            <div className="space-y-2">
                <Label htmlFor="companySize" required>
                    Company Size
                </Label>
                <Select
                    value={formData.companySize}
                    onValueChange={(value) => handleChange('companySize', value)}
                    required
                >
                    <SelectTrigger id="companySize">
                        <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                        {companySizeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Role */}
            <div className="space-y-2">
                <Label htmlFor="role" required>
                    Role
                </Label>
                <Select
                    value={formData.role}
                    onValueChange={(value) => handleChange('role', value)}
                    required
                >
                    <SelectTrigger id="role">
                        <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                        {roleOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                    id="message"
                    placeholder="Tell us more about your data analytics needs..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <div className="bg-primary/10 rounded-[16px] border border-primary/20 p-0.5">
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-[14px] h-12 text-base"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </div>
            </div>
        </form>
    )
}
