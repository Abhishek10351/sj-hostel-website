"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, FileType } from "lucide-react";
import { useState } from "react";

interface Document {
    id: string;
    title: string;
    description: string;
    type: string;
    date: string;
    fileUrl: string;
    category: "form" | "notice" | "rule" | "other";
}

export default function Documents() {
    const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // Sample documents - replace with actual document data
    const documents: Document[] = [
        {
            id: "1",
            title: "Hostel Application Form",
            description: "Application form for new hostel admission",
            type: "PDF",
            date: "2024-01-15",
            fileUrl: "/documents/timetable.pdf",
            category: "form",
        },
        {
            id: "2",
            title: "Hostel Rules & Regulations",
            description: "Complete hostel rules and regulations document",
            type: "PDF",
            date: "2024-01-10",
            fileUrl: "/documents/rules-regulations.pdf",
            category: "rule",
        },
        {
            id: "3",
            title: "Fee Payment Notice",
            description: "Important notice regarding hostel fee payment",
            type: "PDF",
            date: "2024-01-20",
            fileUrl: "/documents/fee-notice.pdf",
            category: "notice",
        },
        {
            id: "4",
            title: "Room Allotment Guidelines",
            description: "Guidelines for room allotment process",
            type: "PDF",
            date: "2024-01-08",
            fileUrl: "/documents/room-allotment.pdf",
            category: "other",
        },
        {
            id: "5",
            title: "Leave Application Form",
            description: "Form for applying hostel leave",
            type: "PDF",
            date: "2024-01-05",
            fileUrl: "/documents/leave-form.pdf",
            category: "form",
        },
    ];

    const getCategoryColor = (category: Document["category"]) => {
        switch (category) {
            case "form":
                return "bg-blue-100 text-blue-700";
            case "notice":
                return "bg-red-100 text-red-700";
            case "rule":
                return "bg-purple-100 text-purple-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getCategoryLabel = (category: Document["category"]) => {
        switch (category) {
            case "form":
                return "Form";
            case "notice":
                return "Notice";
            case "rule":
                return "Rules";
            default:
                return "Document";
        }
    };

    const handleView = (doc: Document) => {
        setSelectedDocument(doc);
        setIsViewerOpen(true);
    };

    const handleDownload = (doc: Document) => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement("a");
        link.href = doc.fileUrl;
        link.download = `${doc.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Page Header */}
            <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Documents & Forms
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Access important documents, application forms, notices, and guidelines for SJ Boys' Hostel
                    </p>
                </div>
            </section>

            {/* Documents Grid */}
            <section className="py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {documents.map((doc) => (
                            <Card
                                key={doc.id}
                                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <FileText className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                                                doc.category
                                            )}`}
                                        >
                                            {getCategoryLabel(doc.category)}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {doc.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(doc.date).toLocaleDateString('en-US', { 
                                            year: 'numeric', 
                                            month: 'short', 
                                            day: 'numeric' 
                                        })}</span>
                                        <span className="mx-2">•</span>
                                        <FileType className="w-4 h-4" />
                                        <span>{doc.type}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button
                                            onClick={() => handleView(doc)}
                                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                                            size="sm"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            View
                                        </Button>
                                        <Button
                                            onClick={() => handleDownload(doc)}
                                            variant="outline"
                                            className="flex-1 hover:bg-blue-50"
                                            size="sm"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Download
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Viewer Modal */}
            {isViewerOpen && selectedDocument && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsViewerOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {selectedDocument.title}
                                </h2>
                                <p className="text-gray-600 text-sm mt-1">
                                    {selectedDocument.description}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => handleDownload(selectedDocument)}
                                    variant="outline"
                                    size="sm"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                </Button>
                                <Button
                                    onClick={() => setIsViewerOpen(false)}
                                    variant="ghost"
                                    size="sm"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 overflow-hidden">
                            <iframe
                                src={selectedDocument.fileUrl}
                                className="w-full h-full"
                                title={selectedDocument.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function X({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
